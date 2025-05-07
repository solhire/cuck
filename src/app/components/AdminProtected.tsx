'use client'

import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import AdminLoginScreen from './AdminLoginScreen';
import { useRouter } from 'next/navigation';

export default function AdminProtected({ children }: { children: React.ReactNode }) {
  const { isAdmin } = useAuth();
  const router = useRouter();
  
  // Redirect non-admin users if they try to access this page
  useEffect(() => {
    if (!isAdmin) {
      // The component will show the login screen,
      // but this is an additional security measure
      router.prefetch('/');
    }
  }, [isAdmin, router]);

  if (!isAdmin) {
    return <AdminLoginScreen />;
  }

  return <>{children}</>;
} 