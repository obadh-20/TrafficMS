//src/app/api/profile/upload/route.js
import { writeFile } from 'fs/promises';
import path from 'path';
import { v4 as uuid } from 'uuid';

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');

  if (!file || typeof file === 'string') {
    return new Response(JSON.stringify({ error: 'Invalid file' }), { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${uuid()}-${file.name}`;
  const filePath = path.join(process.cwd(), 'public/uploads', filename);

  await writeFile(filePath, buffer);

  return new Response(JSON.stringify({
    url: `/uploads/${filename}`,
  }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
