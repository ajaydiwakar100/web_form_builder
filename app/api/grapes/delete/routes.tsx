import { NextResponse } from 'next/server';
import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({ region: process.env.AWS_REGION });

export async function POST(req: Request) {
  const { url } = await req.json();

  if (!url) {
    return NextResponse.json({ error: 'No URL provided' }, { status: 400 });
  }

  try {
    const bucketUrl = process.env.AWS_S3_BASE_URL!;
    const key = url.replace(`${bucketUrl}/`, '');

    await s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET!,
        Key: key,
      })
    );

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('S3 Delete Error:', err);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
