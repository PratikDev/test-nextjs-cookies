import { cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const cookiesStore = cookies();

  // log all cookies
  cookiesStore.getAll().forEach((cookie) => {
    console.log(cookie);
  });
}

export const config = {
  matcher: [
    // only run for the "/middleware" path
    "/middleware",
  ],
};
