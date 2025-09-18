import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello world!", class: "13.A" }, { status: 201 });
}
