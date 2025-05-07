#!/bin/bash

# Build and deploy script
echo "Starting build for cuck2025.com..."

# Build the project
npm run build

# Deploy to Vercel
vercel --prod

# Install dependencies
echo "Installing dependencies..."
npm install

# Copy environment files
echo "Setting up environment files..."
cp .env.production .env.local

echo "Build complete."
echo "Deploy the 'out' directory to your hosting provider."
echo "Don't forget to set up the environment variables on your hosting platform:"
echo "  - DATABASE_URL"
echo "  - NEXT_PUBLIC_ADMIN_HASH"
echo "  - NEXT_PUBLIC_SITE_URL"

echo "Done!" 