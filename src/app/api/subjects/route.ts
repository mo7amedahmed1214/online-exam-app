import { JSON_HEADER } from "@/lib/constants/api.constant";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // varibles
  const token = await getToken({ req });
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit") || "6";  

  const respons = await fetch(`${process.env.API}/subjects?limit=${limit}`, {
    method: "GET",
    headers: {
      token: token?.token || "",
    },
  });

  const payload: ApiResponse<PaginatedResponse<{ subjects: Subject[] }>> =
    await respons.json();

  return NextResponse.json(payload, { status: respons.status });
}
