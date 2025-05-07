#!/bin/bash

# Build script for deploying to production

echo "Starting build for bully2025.org..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Create production build
echo "Creating production build..."
npm run build

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