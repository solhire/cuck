import { NextRequest, NextResponse } from 'next/server';
import { 
  getSiteColors, 
  getColorByPageAndKey, 
  updateColor, 
  updateColors,
  seedColors 
} from '../../../lib/colorUtils';

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

// Update site colors
export async function POST(request: NextRequest) {
  try {
    // Validate admin session token
    const authHeader = request.headers.get('authorization');
    if (!validateAdminSession(authHeader)) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    
    // Parse the request body
    const data = await request.json();
    
    // Handle updating a single color
    if (data.page && data.key && data.value) {
      const updatedColor = await updateColor(data.page, data.key, data.value);
      return NextResponse.json({ success: true, data: updatedColor });
    }
    
    // Handle updating multiple colors
    if (data.updates && Array.isArray(data.updates)) {
      const updatedCount = await updateColors(data.updates);
      return NextResponse.json({ 
        success: true, 
        data: { 
          message: `Updated ${updatedCount} colors`, 
          count: updatedCount 
        } 
      });
    }
    
    return NextResponse.json({ success: false, error: 'Invalid request format' }, { status: 400 });
  } catch (error) {
    console.error('Error handling color update:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Internal server error' 
    }, { status: 500 });
  }
}

// Get current colors
export async function GET() {
  try {
    // Ensure initial colors are seeded
    await seedColors();
    
    // Fetch all colors
    const colors = await getSiteColors();
    
    return NextResponse.json({ success: true, data: colors });
  } catch (error) {
    console.error('Error fetching colors:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
} 