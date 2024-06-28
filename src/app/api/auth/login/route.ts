import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { password, email } = body
  console.log({ password, email })

  const token = 'asdfasfaswdf'

  if (password && email) {
    return NextResponse.json({
      token
    }, { status: 200 })
  } else {
    return NextResponse.json({
      msg: 'Invalid credentials'
    }, { status: 400 })
  }
}
