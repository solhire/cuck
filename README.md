# SUNDAY SERVICE

A minimalist, high-end landing page for SUNDAYSERVICE.NET.

## Features

- Stark black background with bold red accents
- Minimalist animations and transitions
- Responsive design for all devices
- Interactive elements with hover effects
- D-Day countdown timer

## Tech Stack

- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS
- Geist Sans and Geist Mono fonts

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

- Home (`/`): Landing page with logo and HOOLIGANS/YE text
- Experience (`/sunday-service`): Sunday Service experience page
- Hooligans (`/hooligans`): Casting call information
- Ye (`/ye`): Ye page with white background

## Deployment

### GitHub

1. Create a new repository on GitHub
2. Push your code to GitHub:

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Vercel

1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
2. Click "New Project" and import your GitHub repository
3. Keep the default settings and click "Deploy"
4. Once deployed, you can access your site at the provided Vercel URL

### Custom Domain

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain (e.g., sundayservice.net)
3. Follow the instructions to configure your DNS settings:
   - If your domain is registered elsewhere, add the provided nameservers or CNAME record
   - If you're using Vercel as your registrar, it will be configured automatically

## Version

Current version: 3.16.25

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# bully2025.org Website

This is the official website for bully2025.org.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Production Deployment

1. Set up environment variables:
   - Create a `.env.local` file with the required variables
   - Ensure `NEXT_PUBLIC_ADMIN_HASH` is set with the SHA-256 hash of your admin password

2. Build and deploy:
   ```bash
   # Build the application
   npm run build
   
   # Deploy using your preferred hosting provider
   # Example: Vercel, Netlify, etc.
   ```

3. Domain Setup:
   - Ensure DNS settings are correctly pointing to your hosting provider
   - Set up SSL certificates for secure HTTPS access to bully2025.org

## Admin Access

Admin panel is available at `/admin` with secure authentication.
