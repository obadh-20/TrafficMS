import { getDBConnection } from '@/lib/db';

export async function GET() {
  const conn = await getDBConnection();
  const [rows] = await conn.execute('SELECT * FROM road_data ORDER BY RoadID ASC');
  await conn.end();

  return new Response(JSON.stringify(rows), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(req) {
  try {
    const { RoadID, MaxSpeed, Lanes, HighwayType } = await req.json();

    const id = parseInt(RoadID);
    const speed = parseFloat(MaxSpeed);
    const lanes = parseInt(Lanes);
    const highway = String(HighwayType || '').trim();

    if (!id || isNaN(speed) || isNaN(lanes) || !highway) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
    }

    const conn = await getDBConnection();
    await conn.execute(
      'UPDATE road_data SET MaxSpeed = ?, Lanes = ?, HighwayType = ? WHERE RoadID = ?',
      [speed, lanes, highway, id]
    );
    await conn.end();

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error('PUT road_data error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
