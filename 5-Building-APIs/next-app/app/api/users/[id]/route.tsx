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

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate the request body
  // if invalid, return 400 error
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is Required" }, { status: 400 });

  // fetch the user with the given id
  // if doesn`t exist, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // update the user
  // Return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch user from the DB
  // If not found, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Delete the user
  // Return 200
  return NextResponse.json({});
}
