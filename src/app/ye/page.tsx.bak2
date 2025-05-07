import Link from 'next/link';
import Image from 'next/image';
import ProtectedPage from '../components/ProtectedPage';

export default function Ye() {
  return (
    <ProtectedPage>
      <main className="flex min-h-screen flex-col items-center p-6 relative bg-white">
        {/* Version number */}
        <div className="absolute top-6 left-6 text-black/50 font-mono text-sm">
          3.16.25
        </div>
        
        {/* Ye image at the top */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 mt-8 mb-12">
          <Image 
            src="/ye.png" 
            alt="Ye" 
            fill 
            priority
            className="object-contain"
          />
        </div>
        
        {/* Fitsketch image - left side */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-32 h-56 md:w-48 md:h-80 relative">
          <Image 
            src="/fitsketch.png" 
            alt="Fit Sketch" 
            fill
            className="object-contain"
          />
        </div>
        
        {/* Hood image - bottom left - moved left */}
        <div className="absolute bottom-6 left-0 w-32 h-32 md:w-48 md:h-48 relative">
          <Image 
            src="/hood.png" 
            alt="Hood" 
            fill
            className="object-contain"
          />
        </div>
        
        {/* Bully image - bottom right */}
        <div className="absolute bottom-6 right-0 w-32 h-32 md:w-48 md:h-48 relative">
          <Image 
            src="/BULLY.jpg" 
            alt="Bully" 
            fill
            className="object-contain"
          />
        </div>
        
        {/* Main content */}
        <div className="flex flex-col items-center justify-center">
          {/* OMG image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
            <Image 
              src="/omg.png" 
              alt="OMG" 
              fill 
              className="object-contain"
            />
          </div>
          
          {/* Back link */}
          <Link href="/" className="text-black/50 font-mono text-sm hover:text-black transition-colors duration-300 mt-8">
            BACK
          </Link>
        </div>
      </main>
    </ProtectedPage>
  );
}
