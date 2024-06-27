import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const transform = request.nextUrl.searchParams.get('transform')
  console.log({ transform })

  return NextResponse.json({
    time: transform === 'true' ? new Date().toLocaleDateString() : Date.now()
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  console.log({ body });

  return NextResponse.json({
    time: Date.now()
  });
}
