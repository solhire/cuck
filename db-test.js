// A simple script to test updating a message in the database
const { PrismaClient } = require('./src/generated/prisma');
const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Testing database connection...');
    
    // First, log current messages
    const currentMessages = await prisma.siteMessage.findMany({
      where: { page: 'homepage' }
    });
    
    console.log('Current messages:', JSON.stringify(currentMessages, null, 2));
    
    // Find a message to update (phaseTitle)
    const phaseTitle = currentMessages.find(msg => msg.key === 'phaseTitle');
    
    if (!phaseTitle) {
      console.log('No phaseTitle message found');
      return;
    }
    
    // Create a test update value with timestamp
    const newValue = `PHASE ${Math.floor(Math.random() * 10)} - ${new Date().toISOString().slice(0, 19)}`;
    
    console.log(`Updating phaseTitle from "${phaseTitle.value}" to "${newValue}"...`);
    
    // Update the message
    const updatedMessage = await prisma.siteMessage.update({
      where: {
        id: phaseTitle.id
      },
      data: {
        value: newValue
      }
    });
    
    console.log('Message updated successfully:', JSON.stringify(updatedMessage, null, 2));
    
    // Verify the update
    const verifiedMessage = await prisma.siteMessage.findUnique({
      where: {
        id: phaseTitle.id
      }
    });
    
    console.log('Verified message:', JSON.stringify(verifiedMessage, null, 2));
    
    console.log('Test completed successfully!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 