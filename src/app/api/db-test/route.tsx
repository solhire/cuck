import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

// This is a temporary endpoint to check database content
export async function GET() {
  try {
    // Get all messages from the database
    const messages = await prisma.siteMessage.findMany();
    
    // Get all images from the database
    const images = await prisma.siteImage.findMany();
    
    // Get database metadata
    const dbInfo = {
      messageCount: messages.length,
      imageCount: images.length,
      messageKeys: messages.map(m => `${m.page}.${m.key}`),
      timestamp: new Date().toISOString()
    };
    
    return NextResponse.json({
      success: true,
      dbInfo,
      messages,
      images
    });
  } catch (error) {
    console.error('Error fetching database content:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 