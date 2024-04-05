import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

// Fetch the data from a DB
// if found , return the data
// If not found, return 404 error
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not Found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Moody" });
}
