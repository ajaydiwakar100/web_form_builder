import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileName = `${randomUUID()}-${file.name}`;

    let fileUrl: string;

    // Check if S3 credentials exist
    if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY && process.env.AWS_S3_BUCKET && process.env.AWS_REGION) {
      const s3 = new S3Client({
        region: process.env.AWS_REGION,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
      });

      const s3Key = `grapesjs/${fileName}`;
      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.AWS_S3_BUCKET,
          Key: s3Key,
          Body: buffer,
          ContentType: file.type,
          ACL: 'public-read', // optional
        })
      );

      fileUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;
    } else {
      // Fallback: store file locally in /public/uploads
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

      const localPath = path.join(uploadDir, fileName);
      fs.writeFileSync(localPath, buffer);

      fileUrl = `/uploads/${fileName}`; // accessible via /uploads/filename in browser
    }

    // GrapesJS expects an array of URLs
    return NextResponse.json({ data: [fileUrl] });
  } catch (err) {
    console.error('❌ Upload error:', err);
    return NextResponse.json({ error: 'Upload failed: ' + err }, { status: 500 });
  }
}
