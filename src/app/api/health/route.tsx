import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

// This endpoint can be used to verify the production environment is working correctly
export async function GET() {
  try {
    // Test database connection
    const dbTest = await prisma.$queryRaw`SELECT 1 as test`;
    
    // Gather diagnostic information
    const info = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      database: dbTest ? 'connected' : 'error',
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    };
    
    return NextResponse.json({
      success: true,
      ...info
    });
  } catch (error) {
    console.error('Health check failed:', error);
    
    return NextResponse.json({
      success: false,
      status: 'unhealthy',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 