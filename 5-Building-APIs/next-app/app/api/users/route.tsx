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
