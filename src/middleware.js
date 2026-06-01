// middleware.js

import { NextResponse } from "next/server";

export function middleware(request) {
  const langCookie = request.cookies.get("lang")?.value;

  // Si déjà défini → on laisse passer
  if (langCookie) {
    return NextResponse.next();
  }

  const acceptLang = request.headers.get("accept-language") || "";

  const lang = acceptLang.includes("en") ? "en" : "fr";

  const response = NextResponse.next();
  response.cookies.set("lang", lang);

  return response;
}

export const config = {
  matcher: ["/((?!_next).*)"],
};