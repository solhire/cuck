import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

// Current values to set in the database
const currentMessages = {
  homepage: {
    evolvedText: "I DIDNT CHANGE I EVOLVED ITS ALWAYS BEEN IN MY IMAGERY IM JUST EMBRACING MYSELF",
    warBegins: "When diplomacy ends, War begins.",
    phaseTitle: "PHASE 2",
    wwiii: "WWIII",
    ww3Deluxe: "WW3 DELUXE",
    pumpFunLink: "PUMP.FUN/PROFILE/ƒUCK",
    caAddress: "D351aeeC5XKniB99eEEd8aTLjXBcURWRoNyD9ikzpump",
    bullyV1: "BULLY V1",
    currentDate: "4.12",
    dDayText: "D-DAY"
  }
};

export async function GET() {
  try {
    // Prepare all messages for insertion/update
    const updateOperations = [];
    
    for (const [page, messages] of Object.entries(currentMessages)) {
      for (const [key, value] of Object.entries(messages)) {
        updateOperations.push(
          prisma.siteMessage.upsert({
            where: {
              page_key: {
                page,
                key
              }
            },
            update: {
              value: String(value)
            },
            create: {
              page,
              key,
              value: String(value)
            }
          })
        );
      }
    }
    
    // Execute all database operations
    await prisma.$transaction(updateOperations);
    
    return NextResponse.json({ 
      success: true, 
      message: "Database values have been reset to current values",
      count: updateOperations.length
    });
  } catch (error) {
    console.error('Error resetting messages:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
} 