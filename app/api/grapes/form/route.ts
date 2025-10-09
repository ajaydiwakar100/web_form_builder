import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log('Form 1 Data:', data); // log form submission
  return NextResponse.json({ message: 'Form 1 received' });
}
