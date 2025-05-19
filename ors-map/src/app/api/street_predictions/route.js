//src/app/api/street_predictions/route.js
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const streetName = searchParams.get('streetName');

    if (!streetName) {
      console.warn('❌ Missing streetName in query');
      return new Response(JSON.stringify({ error: 'Missing streetName parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('🔍 Searching for street:', streetName);

    const conn = await mysql.createConnection(dbConfig);
    console.log('✅ Connected to DB');

    // Find the road
    const [roadRows] = await conn.execute(
      'SELECT * FROM road_data WHERE StreetName = ?',
      [streetName]
    );

    if (!roadRows || roadRows.length === 0) {
      console.warn('❌ Street not found:', streetName);
      return new Response(JSON.stringify({ error: 'Street not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const road = roadRows[0];
    console.log('✅ Found road:', road.RoadID);
    // Only continue if we have a valid RoadID
    if (!road.RoadID) {
      console.warn('⚠️ No RoadID found for this street:', road);
      return new Response(JSON.stringify({ error: 'Invalid road data' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const [predictionRows] = await conn.execute(
      'SELECT * FROM street_predictions WHERE RoadID = ? ORDER BY ProcessedAt DESC LIMIT 1',
      [road.RoadID]
    );

    const prediction = predictionRows?.[0] || {};
console.log('✅ Found prediction:', prediction);
    const result = {
      ...road,
      FinalPrediction: prediction.FinalPrediction || 1.0,
      ProcessedAt: prediction.ProcessedAt || null,
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('🔥 Internal server error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
