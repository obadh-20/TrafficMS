import { getDBConnection } from '@/lib/db';

export async function GET() {
  try {
    const conn = await getDBConnection();
    const [rows] = await conn.execute(`
      SELECT sp.RoadID, sp.FinalPrediction, sp.ProcessedAt,
             rd.Latitude, rd.Longitude
        FROM street_predictions sp
        JOIN road_data rd ON sp.RoadID = rd.RoadID
        ORDER BY sp.ProcessedAt DESC
    `);
    await conn.end();

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('GET predictions error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const { RoadID, FinalPrediction } = await req.json();
    const id = parseInt(RoadID);
    const prediction = parseFloat(FinalPrediction);

    if (!id || isNaN(prediction)) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
    }

    const conn = await getDBConnection();
    await conn.execute(
      'UPDATE street_predictions SET FinalPrediction = ? WHERE RoadID = ?',
      [prediction, id]
    );
    await conn.end();

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error('PUT street_predictions error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
