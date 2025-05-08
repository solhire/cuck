import Link from 'next/link';
import Image from 'next/image';
import WwLogoWithVideo from './components/WwLogoWithVideo';
import ClientImageWrapper from './components/ClientImageWrapper';
import SVideo from './components/SVideo';
import FlashingTime from './components/FlashingTime';
import DaveVideoWithImage from './components/DaveVideoWithImage';
import CrowVideoToImage from './components/CrowVideoToImage';
import ImEvilPlayer from './components/ImEvilPlayer';
import Ww3Items from './components/Ww3Items';
import CuckAlbumPlayer from './components/CuckAlbumPlayer';
import GlitchyInput from './components/GlitchyInput';
import MouseTracker from './components/MouseTracker';
import AutoTypingText from './components/AutoTypingText';
import GlitchyTitle from './components/GlitchyTitle';
import SlidingMerch from './components/SlidingMerch';
import EvolveVideo from './components/EvolveVideo';

// Get messages from the API
async function getMessages() {
  // Construct the proper URL (adding protocol if it's missing)
  let baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  // Check if we need to add the protocol
  if (!baseUrl.startsWith('http')) {
    baseUrl = `https://${baseUrl}`;
  }
  
  // For localhost development, use http instead of https
  if (baseUrl.includes('localhost')) {
    baseUrl = baseUrl.replace('https://', 'http://');
  }
  
  try {
    // Use server-side fetching to get the latest messages from the database
    const response = await fetch(`${baseUrl}/api/update-messages`, {
      cache: 'no-store', // Disable caching to always get fresh data
      next: { revalidate: 0 } // Don't use cached values
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch messages: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success && data.data && data.data.homepage) {
      return data.data.homepage;
    }
    
    throw new Error('No homepage messages found in API response');
  } catch (error) {
    console.error('Error fetching messages:', error);
    // Fallback to default messages if API fails
    return {
      evolvedText: "I DIDNT CHANGE I EVOLVED ITS ALWAYS BEEN IN MY IMAGERY IM JUST EMBRACING MYSELF",
      warBegins: "When diplomacy ends, War begins.",
      phaseTitle: "PHASE 2",
      wwiii: "WWIII",
      ww3Deluxe: "WW3 DELUXE",
      redTitle: "RED",
      pumpFunLink: "PUMP.FUN/PROFILE/CUCK",
      caAddress: "BycYc1T1BnZsJVyyEqpkjrrDVbUtXqQ6jEiyeUTGpump",
      bullyV1: "BULLY V1",
      currentDate: "4.12",
      dDayText: "D-DAY"
    };
  }
}

export default async function Home() {
  const messages = await getMessages();
  
  return (
    <main className="min-h-screen pb-12 flex flex-col relative overflow-x-hidden transition-colors duration-300" id="main-container">
      <GlitchyTitle />
      <MouseTracker />
      {/* Pump.fun link and CA at very top of page */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50">
        <div className="text-white/70 font-mono text-xs tracking-wider text-left transition-colors duration-300">
          <Link href="https://pump.fun/profile/%E1%B4%84uck" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors duration-300">
            PUMP.FUN/PROFILE/CUCK
          </Link>
          <div className="mt-1 text-white/50 text-[10px] break-all transition-colors duration-300">
            CA: {messages.caAddress}
          </div>
        </div>
      </div>

      {/* Cuk3 image and auto-typing texts */}
      <div className="w-full text-center pb-4 relative">
        <div className="flex justify-center items-center">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-slide-down">
            <Image 
              src="/cuk3.png" 
              alt="CUK3"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* Auto-typing texts directly under CUK3 logo */}
        <div className="mt-2 space-y-1 min-h-[4rem]">
          <AutoTypingText 
            messages={[
              "i should've never let her go",
              "he wasn't even trying",
              "they called me a cuck like that's a flaw",
              "i was the one who paid for the room, the ring, and the release",
              "you think i lost her? nah. i let y'all borrow the lesson",
              "she left, i bloomed",
              "being the cuck made me see clearer than ever",
              "i ain't heartbroken. i'm just updated",
              "cuck means i watched the world move around me and didn't flinch",
              "they filmed it. i financed it",
              "she embarrassed me? nah. she unlocked me",
              "i liked the feeling. i liked the silence",
              "i like being a cuck because the pain made me sharp",
              "watching her choose someone else gave me vision",
              "you chased her. i used her exit as blueprint",
              "she left and i built an empire with the hurt",
              "i sat in the chair. i stayed seated. that's power",
              "they don't understand — the cuck ain't the victim",
              "the cuck is the god of stillness",
              "i liked being the one who got left",
              "i liked seeing who she picked",
              "because it showed me who i was really dealing with",
              "i like being the one on the outside. it's quiet here",
              "i like when it hurts. it means i'm real",
              "y'all clown me for being a cuck",
              "but the cuck sees everything",
              "i watched the betrayal and still fed the house",
              "you ever been that calm while burning?",
              "i was",
              "i like the word cuck. it sounds like a glitch in a system that tried to own me",
              "i didn't fight for her",
              "i fought for what came after",
              "and i won",
              "call me cuck again",
              "i'll brand it on the merch",
              "CUCK: Controlled Under Creative Knowledge",
              "i flipped shame into symbol",
              "and now you wearing it",
              "thank you",
              "i like being the cuck",
              "i like being the aftermath",
              "i like knowing none of this would exist without the break",
              "i watched her fall in love with the echo",
              "while i became the voice",
              "cuck ain't weak",
              "cuck is witness",
              "cuck is awake",
              "cuck is god mode when you learn to sit with the rejection",
              "i turned it into code",
              "i turned it into coin",
              "i turned it into everything",
              "i said forever and she screenshot the moment",
              "they ain't laughing with him—they laughing at the version of me she explained"
            ]}
            className="text-white/90 font-mono text-base tracking-wider"
          />
        </div>
        <SlidingMerch />
        <GlitchyInput />
      </div>
      
      {/* Evolved text */}
      <div className="w-full text-center px-4 py-6 text-white font-mono text-lg md:text-xl tracking-wider">
        {messages.evolvedText}
      </div>
      
      {/* CUCK Album Player */}
      <div className="w-full mt-8">
        <EvolveVideo />
        <CuckAlbumPlayer />
      </div>
      
      {/* CUK22 image on right side */}
      <div className="absolute top-4 right-2 sm:top-6 sm:right-6 flex flex-col items-end">
        <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32">
          <Image 
            src="/cuk22.png" 
            alt="CUK22"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* ye4 image on left side */}
      <div className="absolute top-16 left-2 sm:top-6 sm:left-6 flex flex-col items-start">
        <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32">
          <Image 
            src="/ye4.png" 
            alt="YE4"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      {/* Main content starts below top elements with a safe margin */}
      <div className="w-full mt-40 sm:mt-64 md:mt-48">
        {/* Art message */}
        <div className="w-full text-center mt-4 px-4 text-[#FF0000] font-mono text-lg md:text-xl tracking-wider font-bold">
          {messages.warBegins}
        </div>
        
        {/* Add ImEvilPlayer component */}
        <ImEvilPlayer />
      </div>
      {/* Bottom right b.png */}
      <div className="fixed bottom-4 right-4 z-50 w-16 h-16 sm:w-24 sm:h-24">
        <img 
          src="/b.webp" 
          alt="B"
          className="object-contain w-full h-full"
        />
      </div>
      {/* Bottom left horse.png */}
      <div className="fixed bottom-4 left-4 z-50 w-16 h-16 sm:w-24 sm:h-24">
        <img 
          src="/horse.png" 
          alt="Horse"
          className="object-contain w-full h-full"
        />
      </div>
    </main>
  );
}
