import { NextResponse } from 'next/server';
import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'No URL provided' }, { status: 400 });
    }

    // If S3 credentials exist
    if (
      process.env.AWS_ACCESS_KEY_ID &&
      process.env.AWS_SECRET_ACCESS_KEY &&
      process.env.AWS_S3_BUCKET &&
      process.env.AWS_REGION &&
      url.startsWith(`https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/`)
    ) {
      const s3 = new S3Client({
        region: process.env.AWS_REGION,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
      });

      const key = url.replace(`https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/`, '');

      await s3.send(
        new DeleteObjectCommand({
          Bucket: process.env.AWS_S3_BUCKET,
          Key: key,
        })
      );

      return NextResponse.json({ success: true, deletedFrom: 's3' });
    } else {
      // Remove file from local storage
      const localPath = path.join(process.cwd(), 'public', url.replace(/^\/+/g, '')); // remove leading slash
      if (fs.existsSync(localPath)) {
        fs.unlinkSync(localPath);
        return NextResponse.json({ success: true, deletedFrom: 'local' });
      } else {
        return NextResponse.json({ error: 'File not found locally', status: 404 });
      }
    }
  } catch (err: any) {
    console.error('Delete Error:', err);
    return NextResponse.json({ error: 'Failed to delete', details: err.message }, { status: 500 });
  }
}
