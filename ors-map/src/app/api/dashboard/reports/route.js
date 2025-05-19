//src/app/api/dashboard/reports/route.js
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

export async function GET() {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const [rows] = await conn.execute(`
      SELECT 
        sp.RoadID, sp.FinalPrediction, sp.ProcessedAt,
        rd.StreetName
      FROM street_predictions sp
      JOIN road_data rd ON sp.RoadID = rd.RoadID
      ORDER BY sp.ProcessedAt DESC
    `);
    await conn.end();

    return new Response(JSON.stringify(rows), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Report fetch error:', err);
    return new Response(JSON.stringify({ error: 'Failed to load report data' }), {
      status: 500,
    });
  }
}
