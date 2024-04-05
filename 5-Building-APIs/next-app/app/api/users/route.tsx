import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

// returning simple string
// export function GET(request: NextRequest) {
//   return NextResponse.json("hello");
// }

// returning simple object
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Moody" },
    { id: 2, name: "Lili" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // return NextResponse.json(body);
  // return NextResponse.json({ id: 1, name: body.name });
  if (!body.name)
    return NextResponse.json({ error: "Name is Required" }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
