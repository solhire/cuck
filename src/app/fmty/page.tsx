import Image from 'next/image';
import Link from 'next/link';
import ProtectedPage from '../components/ProtectedPage';

export default function Fmty() {
  return (
    <ProtectedPage>
      <main className="flex min-h-screen flex-col items-center justify-center p-6 relative bg-white">
        {/* Centered ye image */}
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <Image 
            src="/ye.png" 
            alt="Ye" 
            fill 
            priority
            className="object-contain"
          />
        </div>

        {/* Back link */}
        <Link href="/" className="text-black/50 font-mono text-sm hover:text-black transition-colors duration-300 mt-12 tracking-wider">
          BACK
        </Link>
      </main>
    </ProtectedPage>
  );
} 