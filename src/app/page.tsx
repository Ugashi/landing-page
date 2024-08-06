"use client";
import { useState } from "react";
import Communities from "@/components/communities/communities";
import HowToBuy from "@/components/how-to-buy/how-to-buy";
import License from "@/components/license/license";
import UsagiStory from "@/components/usagi-story/story";
import Welcome from "@/components/welcome/welcome";
import { ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  return (
    <ParallaxProvider>
      <main className="w-full flex flex-col items-center invis-scroll">
        {isVideoPlaying ? (
          <div className="w-full h-screen ">
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
            <Welcome
              isAnimationComplete={isAnimationComplete}
              setIsAnimationComplete={setIsAnimationComplete}
            />
            {isAnimationComplete && (
              <>
                <UsagiStory />
                <div className="w-full bg-[#fff] flex flex-col items-center relative z-[20]">
                  <div
                    className=" w-full 2xl:max-w-[1440px] flex flex-col items-center  bg-[rgba(234,218,203,1)]
            bg-[url('/images/background.png')] bg-opacity-[0.08] bg-blend-exclusion h-[2009px] bg-cover"
                  >
                    <HowToBuy />
                    <Communities />
                    <License />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </main>
    </ParallaxProvider>
  );
}
