import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/account(.*)", "/checkout"]);
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req))
    auth().protect({
      unauthenticatedUrl: process.env.NEXT_PUBLIC_SERVER_URL,
      unauthorizedUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    });
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
