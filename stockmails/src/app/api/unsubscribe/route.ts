import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {

    const body = await req.json();
    console.log("Delete req", body)

    const backendRes = await fetch("https://stockmails-server.vercel.app/api/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  }
  catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}