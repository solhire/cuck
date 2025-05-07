import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware will run for all requests
export function middleware(request: NextRequest) {
  // Return early if not the image upload route
  if (!request.nextUrl.pathname.startsWith('/api/update-images')) {
    return NextResponse.next();
  }

  // For image upload requests using POST, we need to forward them as-is without parsing
  // This avoids the default body parser which can't handle multipart/form-data properly
  if (request.method === 'POST') {
    // Forward the request as-is
    return NextResponse.next();
  }

  // Continue for all other requests
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
}; 