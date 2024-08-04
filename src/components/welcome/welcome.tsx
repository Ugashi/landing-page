"use client";
import Image from "next/image";
import logo from "@/images/welcome/logo.png";
import bunny from "@/images/welcome/bunny.png";
import blossom from "@/images/welcome/blossom.png";
import UsagiWelcome from "../svgs/usagi-welcome";
import cloudleft from "@/images/welcome/whitetree1.png";
import cloudright from "@/images/welcome/whitetree2.png";
import SocialLinks from "./social-links";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParallax } from "react-scroll-parallax";

export default function Welcome() {
  const parallax: any = useParallax({
    speed: -20,
  });

  const logoParallax: any = useParallax({
    speed: 0,
  });

  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   // Disable scroll
  //   document.body.style.maxHeight = "100vh";
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     // Re-enable scroll when component unmounts
  //     document.body.style.overflowY = "scroll";
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAnimationComplete]);

  const cloudLeftStyle = {
    left: isAnimationComplete ? `-${scrollPosition / 2}px` : "0px",
  };

  const cloudRightStyle = {
    right: isAnimationComplete ? `-${scrollPosition / 2}px` : "0px",
  };

  const petalsVariants = (delay: number) => {
    return {
      leftToRight: {
        x: ["-150%", "0%"],
        transition: {
          x: {
            delay: delay,
            duration: 2.0,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      },
      rightToLeft: {
        x: ["0%", "-20%"],
        transition: {
          delay: delay,
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 8,
          },
        },
      },
    };
  };

  return (
    <section className="w-full flex h-screen items-center justify-center 2xl:max-w-[1440px] bg-[#F4EBE4] relative">
      {/* sunrise background */}
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="w-full h-screen absolute top-0 left-0 bg-[url('/images/welcome-background.png')] bg-cover z-[1]"
      ></motion.div>

      {/* mountain background */}
      <div className="fixed z-[2] 2xl:max-w-[1440px] w-full overflow-hidden  h-[700px]">
        <motion.div
          initial={{ y: "150%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 1.8,
            delay: 2.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className=" w-full h-full bg-center bg-[url('/images/welcome/MONTAIN.png')] bg-cover"
        ></motion.div>
      </div>
      {/* grass */}
      <div className="absolute top-[142px] z-[7] w-full">
        <motion.div
          initial={{ y: "150%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 2.3,
            delay: 2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="w-full bg-[url('/images/welcome/grass.png')] bg-cover bg-center h-[700px]"
        ></motion.div>
        {/* welcome text */}
        <div className="w-full h-[251.616px] bg-transparent mt-[-1px] pt-[84.69px]">
          <p className="ml-[120px] max-w-[692px] text-[24px] leading-7 text-[#EADACB] font-nuku">
            Welcome to Usagi, the meme coin inspired by the playful and
            adventurous spirit of rabbits! Usagi is more than just a
            cryptocurrency; it&apos;s a community-driven project that combines
            the fun of memes with the innovative world of decentralized finance
            (DeFi).
          </p>
        </div>
      </div>

      {/* social links */}
      <SocialLinks
        isAnimationComplete={isAnimationComplete}
        scrollPosition={scrollPosition}
      />

      {/* logo */}
      <motion.div
        initial={{ y: "-150%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 2.3,
          delay: 2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="absolute top-0 z-[5] "
        ref={logoParallax.ref}
      >
        <Image src={logo} alt="logo" />
      </motion.div>

      {/* main bunny */}
      <div className="absolute z-[4] top-[189px]" ref={parallax.ref}>
        {!isAnimationComplete ? (
          <motion.div
            initial={{ y: "270%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1.5,
              delay: 2.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className=" "
          >
            <Image src={bunny} alt="bunny" />
          </motion.div>
        ) : (
          <div className=" ">
            <Image src={bunny} alt="bunny" />
          </div>
        )}
      </div>

      {/* usagi */}
      <motion.div
        initial={{ y: "270%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 2.3,
          delay: 2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="fixed top-[189px] z-[3]"
      >
        <UsagiWelcome />
      </motion.div>

      {/* petals */}

      <div className="absolute top-[86px] z-[8] w-full overflow-hidden 2xl:max-w-[1440px] h-[750px]">
        <motion.div
          variants={petalsVariants(2.3)}
          animate={!isAnimationComplete ? "leftToRight" : "rightToLeft"}
          className="h-[750px] w-[2670px]"
        >
          <Image src={blossom} alt="blossom" width={2670} height={750} />
        </motion.div>
      </div>
      {/* clouds */}
      <motion.div
        initial={{ x: "-150%" }}
        animate={{ x: 0 }}
        transition={{
          duration: 1.5,
          delay: 2.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`absolute z-[5] top-[127px] overflow-hidden`}
        onAnimationComplete={() => setIsAnimationComplete(true)}
        style={cloudLeftStyle}
      >
        <Image src={cloudleft} alt="cloudleft" />
      </motion.div>

      <div className="absolute z-[5] top-0 right-0 w-[550px] overflow-hidden">
        <motion.div
          initial={{ x: "150%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 1.5,
            delay: 2.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative"
          style={cloudRightStyle}
        >
          <Image src={cloudright} alt="cloudright" />
        </motion.div>
      </div>
    </section>
  );
}
