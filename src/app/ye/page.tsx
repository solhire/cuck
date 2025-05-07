import Link from 'next/link';
import Image from 'next/image';
import ProtectedPage from '../components/ProtectedPage';
import MusicPlayer from '../components/MusicPlayer';

export default function Ye() {
  return (
    <ProtectedPage>
      <main className="flex min-h-screen flex-col items-center p-6 relative bg-black">
        {/* From Me To You text */}
        {/* Removed FROM ME TO YOU link */}

        {/* Pump.fun profile link */}
        <div className="absolute top-6 right-6">
          <a 
            href="https://pump.fun/profile/ƒuck" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#FF0000] font-mono text-sm hover:text-[#FF0000]/80 transition-colors duration-300 tracking-wider"
          >
            pump.fun/profile/ƒuck
          </a>
        </div>
        
        {/* Ye2 image - above Bully image */}
        <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-0 w-24 h-24 md:w-48 md:h-48 z-0">
          <Image 
            src="/ye2.png" 
            alt="Ye2" 
            fill 
            className="object-contain"
          />
        </div>
        
        {/* Fitsketch image - right side */}
        <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-0 w-24 h-40 md:w-48 md:h-80 z-0">
          <Image 
            src="/fitsketch.png" 
            alt="Fit Sketch" 
            fill
            className="object-contain"
          />
        </div>
        
        {/* Bully image - bottom right */}
        <div className="hidden sm:block absolute bottom-6 right-0 w-24 h-24 md:w-48 md:h-48 z-0">
          <Image 
            src="/BULLY.jpg" 
            alt="Bully" 
            fill
            className="object-contain"
          />
        </div>
        
        {/* Music Player */}
        <div className="w-full max-w-2xl mt-32 md:mt-48">
          <div className="text-[#FF0000] text-2xl md:text-3xl font-mono tracking-wider text-center mb-8">
            BULLY V1
          </div>
          <MusicPlayer />
        </div>
        
        {/* Mobile-only images row */}
        <div className="flex sm:hidden justify-between w-full mt-8 mb-12">
          <div className="relative w-24 h-24">
            <Image 
              src="/ye2.png" 
              alt="Ye2" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="relative w-24 h-24">
            <Image 
              src="/fitsketch.png" 
              alt="Fit Sketch" 
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-24 h-24">
            <Image 
              src="/BULLY.jpg" 
              alt="Bully" 
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Back link */}
        <Link href="/" className="text-white/50 font-mono text-sm hover:text-white transition-colors duration-300 mt-12 tracking-wider">
          BACK
        </Link>
      </main>
    </ProtectedPage>
  );
}
