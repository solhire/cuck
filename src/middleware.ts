import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware will run for all requests
export function middleware(request: NextRequest) {
  // Get the hostname from the request
  const origin = request.headers.get('origin') || '';
  
  // Create a response object to modify
  const response = NextResponse.next();
  
  // Add security headers for production
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // For API routes, handle CORS
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Allow CORS from localhost in development and from our production domain
    const allowedOrigins = ['https://cuck2025.com', 'http://localhost:3000'];
    
    if (allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      response.headers.set('Access-Control-Allow-Credentials', 'true');
      response.headers.set('Access-Control-Max-Age', '86400');
    }
    
    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { 
        status: 204,
        headers: response.headers
      });
    }
  }
  
  return response;
}

// Configure matcher for what routes this middleware will run on
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}; 