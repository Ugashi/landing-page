"use client";
import { useState } from "react";
import Communities from "@/components/communities/communities";
import HowToBuy from "@/components/how-to-buy/how-to-buy";
import License from "@/components/license/license";
import UsagiStory from "@/components/usagi-story/story";
import Welcome from "@/components/welcome/welcome";
import { ParallaxProvider } from "react-scroll-parallax";
import usaleft from "@/images/license/usaleft.png";
import usaright from "@/images/license/usaright.png";
import Image from "next/image";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  return (
    <ParallaxProvider>
      <main className="w-full flex flex-col items-center ">
        {isVideoPlaying ? (
          <div className="w-full h-screen">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              onEnded={handleVideoEnd}
            >
              <source src="/videos/Loading.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <>
            <Welcome />
            <UsagiStory />
            <div
              className="relative z-[20] w-full 2xl:max-w-[1440px] flex flex-col items-center bg-[rgba(234,218,203,1)] 
            bg-[url('/images/background.png')] bg-opacity-[0.08] bg-blend-exclusion h-[2009px] bg-cover"
            >
              <HowToBuy />
              <Communities />
              <License />
              <button
                className="w-[257.695px] h-[67.032px] flex items-center z-[30] justify-center right-[57px] bottom-[113px] 
              absolute bg-[url('/images/license/backtop.png')] text-[24px] leading-8 font-bold
              hover:scale-105 duration-200"
              >
                BACK TO TOP
              </button>

              <p className=" absolute uppercase text-[16px] leading-8 text-black font-bold right-[57px] bottom-[211px]">
                © 2024 by Sei Usagi. All rights reserved!
              </p>

              <div className="absolute bottom-0  left-0">
                <Image src={usaleft} alt="usaright" />
              </div>
              <div className="absolute bottom-0  right-0">
                <Image src={usaright} alt="usaright" />
              </div>
            </div>
          </>
        )}
      </main>
    </ParallaxProvider>
  );
}
