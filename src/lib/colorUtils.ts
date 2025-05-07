import prisma from './prisma';

/**
 * COLOR MANAGEMENT SYSTEM
 * 
 * This file contains utilities for managing site colors.
 */

// Default colors
const defaultColors = [
  {
    page: 'base',
    key: 'background',
    value: '#000000'
  },
  {
    page: 'base',
    key: 'foreground',
    value: '#000000'
  },
  {
    page: 'base',
    key: 'accent',
    value: '#FF0000'
  },
  {
    page: 'base',
    key: 'accent-hover',
    value: '#FF1111'
  },
  {
    page: 'text',
    key: 'headline',
    value: '#FF0000'
  },
  {
    page: 'button',
    key: 'button-text',
    value: '#FFFFFF'
  },
  {
    page: 'text',
    key: 'link',
    value: '#FF0000'
  },
  {
    page: 'text',
    key: 'link-hover',
    value: '#FF1111'
  }
];

// Interface for color data
export interface SiteColor {
  id: string;
  page: string;
  key: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}

// Get all site colors
export async function getSiteColors(): Promise<SiteColor[]> {
  return prisma.siteColor.findMany({
    orderBy: [
      { page: 'asc' },
      { key: 'asc' }
    ]
  });
}

// Get colors by category/page
export async function getColorsByCategory(category: string): Promise<SiteColor[]> {
  return prisma.siteColor.findMany({
    where: { page: category },
    orderBy: { key: 'asc' }
  });
}

// Get a specific color by page and key
export async function getColorByPageAndKey(page: string, key: string): Promise<SiteColor | null> {
  return prisma.siteColor.findUnique({
    where: { 
      page_key: {
        page,
        key
      }
    }
  });
}

// Update a color
export async function updateColor(page: string, key: string, value: string): Promise<SiteColor> {
  return prisma.siteColor.update({
    where: { 
      page_key: {
        page,
        key
      }
    },
    data: { value }
  });
}

// Update multiple colors at once
export async function updateColors(updates: { page: string, key: string, value: string }[]): Promise<number> {
  const updateOperations = updates.map(update => 
    prisma.siteColor.update({
      where: { 
        page_key: {
          page: update.page,
          key: update.key
        }
      },
      data: { value: update.value }
    })
  );
  
  const results = await prisma.$transaction(updateOperations);
  return results.length;
}

// Seed the database with default colors
export async function seedColors(): Promise<void> {
  console.log('Checking if colors need to be seeded...');
  
  // Check if we have any colors in the database
  const existingColors = await prisma.siteColor.count();
  
  // If no colors exist, seed the database
  if (existingColors === 0) {
    console.log('No colors found. Seeding initial colors...');
    
    const colorsToCreate = defaultColors.map(color => 
      prisma.siteColor.create({
        data: color
      })
    );
    
    // Execute all create operations in a transaction
    await prisma.$transaction(colorsToCreate);
    console.log(`Seeded ${colorsToCreate.length} colors successfully!`);
  } else {
    console.log(`Found ${existingColors} existing colors. No need to seed.`);
  }
}

// Get colors as CSS variables for the :root element
export async function getColorsAsCssVariables(): Promise<string> {
  const colors = await getSiteColors();
  
  return colors.map(color => `  --${color.key}: ${color.value};`).join('\n');
}

// Apply colors to CSS
export async function applyColorsToCss(): Promise<void> {
  const colors = await getSiteColors();
  
  // Group colors by category/page
  const colorsByCategory: { [key: string]: SiteColor[] } = {};
  
  colors.forEach(color => {
    if (!colorsByCategory[color.page]) {
      colorsByCategory[color.page] = [];
    }
    colorsByCategory[color.page].push(color);
  });
  
  // TODO: Logic to update CSS files or CSS-in-JS theme
  // This would depend on your project's CSS architecture
  
  console.log('Colors applied to CSS');
}

// Export color categories
export const COLOR_CATEGORIES = {
  BASE: 'base',
  TEXT: 'text',
  BUTTON: 'button',
  BACKGROUND: 'background'
}; 