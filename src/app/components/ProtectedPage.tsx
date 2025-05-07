'use client'

// We're keeping the component for structure, but it no longer checks authentication
export default function ProtectedPage({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}