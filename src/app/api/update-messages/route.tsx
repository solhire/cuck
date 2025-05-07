import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { seedMessages, getAllMessages } from '../../../lib/seedMessages';

// Define types for messages
interface PageMessages {
  [key: string]: string;
}

// Function to validate admin session
function validateAdminSession(authHeader: string | null): boolean {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  
  try {
    const sessionData = JSON.parse(authHeader.substring(7));
    return sessionData && sessionData.expires && sessionData.expires > Date.now();
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Validate admin session token
    const authHeader = request.headers.get('authorization');
    if (!validateAdminSession(authHeader)) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    
    // Update with new messages
    const { page, updates } = data;
    
    // Validate required fields
    if (!page || !updates || typeof updates !== 'object') {
      return NextResponse.json({ success: false, error: 'Invalid request format' }, { status: 400 });
    }
    
    // Convert page to string to ensure type safety
    const pageKey = String(page);
    
    // Begin transaction to update all messages
    const updateOperations = [];
    
    // Create or update each message in the database
    for (const [key, value] of Object.entries(updates)) {
      updateOperations.push(
        prisma.siteMessage.upsert({
          where: {
            page_key: {
              page: pageKey,
              key: key
            }
          },
          update: {
            value: String(value)
          },
          create: {
            page: pageKey,
            key: key,
            value: String(value)
          }
        })
      );
    }
    
    // Execute all database operations
    await prisma.$transaction(updateOperations);
    
    // Get the updated messages for this page
    const updatedMessages = await prisma.siteMessage.findMany({
      where: { page: pageKey }
    });
    
    // Format the response
    const formattedMessages: PageMessages = {};
    for (const message of updatedMessages) {
      formattedMessages[message.key] = message.value;
    }
    
    return NextResponse.json({ success: true, data: formattedMessages });
  } catch (error) {
    console.error('Error handling update request:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

// Get current messages (doesn't require authentication)
export async function GET() {
  try {
    // Ensure initial messages are seeded
    await seedMessages();
    
    // Fetch all messages
    const messages = await getAllMessages();
    
    return NextResponse.json({ success: true, data: messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
} 