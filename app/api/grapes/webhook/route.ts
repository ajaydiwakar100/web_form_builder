// app/api/grapes/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log('Webhook Data:', data);
  return NextResponse.json({ message: 'Webhook received' });
}
