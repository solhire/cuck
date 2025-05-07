import Link from 'next/link';
import ProtectedPage from '../components/ProtectedPage';

export default function Hooligans() {
  return (
    <ProtectedPage>
      <main className="flex min-h-screen flex-col items-center p-6 relative">
        {/* Version number */}
        <div className="absolute top-6 left-6 version">
          3.16.25
        </div>
        
        {/* Main content */}
        <div className="flex flex-col items-center max-w-3xl w-full mt-16 md:mt-24">
          {/* Headline */}
          <h1 className="text-[#FF0000] text-[3rem] md:text-[5rem] font-black tracking-[0.2em] mb-8 text-center uppercase font-mono">THE HOOLIGANS</h1>
          
          {/* Casting call info */}
          <div className="w-full text-white">
            <h2 className="text-[#FF0000] text-3xl md:text-4xl font-black mb-8 tracking-[0.15em] uppercase border-b border-[#FF0000] pb-4">Official Casting Call</h2>
            
            <p className="text-xl md:text-2xl mb-12 font-mono tracking-wider border-l-4 border-[#FF0000] pl-6 py-2">
              Ye is putting together a hooligan choir to mimic the sound of the Vultures number one song Carnival
            </p>
            
            <div className="mb-12 bg-black/30 p-8 backdrop-blur-sm">
              <h3 className="text-[#FF0000] text-2xl md:text-3xl font-black mb-6 tracking-[0.1em] uppercase">REQUIREMENTS:</h3>
              <ul className="space-y-4 font-mono text-lg">
                {['Male participants only', 
                  'Fit physique required', 
                  'Complexion similar to Sean Combs/Don Cheadle or darker', 
                  'Shaved head (or willingness to shave if selected)', 
                  'MUST BE COMFORTABLE WITH REQUIRED ATTIRE', 
                  'International applicants welcome (primary location: Los Angeles)'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#FF0000] mr-3 font-bold">×</span>
                  <span className="hover:text-[#FF0000] transition-colors duration-300">{item}</span>
                </li>
              ))}
              </ul>
            </div>
            
            <div className="border border-[#FF0000] p-8 text-center">
              <h3 className="text-[#FF0000] text-2xl md:text-3xl font-black mb-6 tracking-[0.1em] uppercase">AUDITION STATUS:</h3>
              <div className="font-mono text-lg md:text-xl tracking-wider space-y-2">
                <p className="text-white/90">4317 BEVERLY BLVD</p>
                <p className="text-white/90">LOS ANGELES, CA 90038</p>
                <p className="text-[#FF0000] font-bold">MARCH 15-19, 2025</p>
                <p className="text-white/90">HOURS: 10AM - 6PM DAILY</p>
                <div className="mt-6 p-4 border-t border-[#FF0000]">
                  <p className="text-[#FF0000] font-bold text-2xl">AUDITIONS ARE NOW CLOSED</p>
                  <p className="text-white/90 mt-2">Thank you to all who participated. Selected candidates will be contacted directly.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Back link */}
          <Link href="/" className="text-white/50 font-mono text-sm hover:text-white transition-colors duration-300 mt-12">
            BACK
          </Link>
        </div>
      </main>
    </ProtectedPage>
  );
}