import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { Pages, Routes } from "./lib/constants/emuns.constant";

const potectedPages = new Set([
  `${Routes.QUIZ_HISTORY}`,
  `${Routes.ROOT}`,
  `${Routes.SELECT_QIUZ}`,
]);

const authPages = new Set([
  `${Routes.AUTH}/${Pages.FORGOT_PASSWORD}`,
  `${Routes.AUTH}/${Pages.LOGIN}`,
  `${Routes.AUTH}/${Pages.REGISTER}`,
  `${Routes.AUTH}/${Pages.RESET_PASSWORD}`,
  `${Routes.AUTH}/${Pages.VERIFY_PASSWORD}`,
]);

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (potectedPages.has(req.nextUrl.pathname)) {
    if (token) return NextResponse.next();

    const redirect = new URL(
      `${Routes.AUTH}/${Pages.LOGIN}`,
      req.nextUrl.origin
    );
    return NextResponse.redirect(redirect);
  }

  if (authPages.has(req.nextUrl.pathname)) {
    if (token) {
      const redirect = new URL(Routes.ROOT, req.nextUrl.origin);
      return NextResponse.redirect(redirect);
    } else {
      return NextResponse.next();
    }
  }
}


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}