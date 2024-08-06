import communitycard from "@/images/community/cardbackground.png";
import Image from "next/image";
import discord from "@/images/community/discord.png";
import x from "@/images/community/x.png";
import Link from "next/link";
import soon from "@/images/community/soon.png";
import discordicon from "@/images/community/disordicon.png";
import xicon from "@/images/community/xicon.png";
const COMMUNITY_INFO = [
  {
    title: "Join our Discord!",
    img: discord,
    des: "Where you can chat with other SEIYANs, earn money making memes, and likely lose braincells in the process.",
    link: "https://x.com/SeiUsagi_io",
    icon: discordicon,
  },
  {
    title: "Follow on Twitter!",
    img: x,
    link: "https://x.com/SeiUsagi_io",
    icon: xicon,
    des: "Where we post our best SEIYAN memes and scream AAAAAA pretty regularly.",
  },
  {
    title: "Comming soon",
    img: x,
    des: "Where we post our best SEIYAN memes and scream AAAAAA pretty regularly.",
    link: "/",
    icon: xicon,
  },
];

export default function Communities() {
  return (
    <section className="w-full mt-[75px]">
      <p className="w-full text-center font-nuku text-[96px] leading-[132px] tracking-[-1.92px] mb-20">
        SEE WHAT WE’RE USAGI
      </p>
      {/* community cards */}
      <div className="w-full flex items-center justify-center overflow-hidden">
        {COMMUNITY_INFO.map((community, index) => {
          return (
            <div
              key={community.title}
              className="w-[443px] h-[583px] relative bg-center"
            >
              {/* community thumbnail */}
              <Image src={communitycard} alt="community card" width={443} />
              {index !== 2 && (
                <Image
                  src={community.icon}
                  alt="discord"
                  className="absolute z-[30] left-1/2 -translate-x-1/2 top-[170.87px] bg-blend-saturation mix-blend-difference -translate-y-1/2"
                />
              )}
              {index === 2 && (
                <>
                  <Image
                    src={soon}
                    alt="soon"
                    className="absolute z-[30] left-[45.03px] top-[33.87px]"
                  />
                  <p className="top-1/2 left-1/2 font-nuku text-[40px] absolute z-[35] leading-[48px] text-white -translate-x-1/2 -translate-y-1/2 max-w-[133px]">
                    COMING SOON!!!
                  </p>
                </>
              )}
              <div className="absolute z-[11] left-[53.03px] top-[39.87px]">
                <Image src={community.img} alt="discord" />

                <div className="mt-[30px] ml-[22px] text-[24px] leading-7 font-nuku">
                  {community.title}
                </div>
                <div className="mt-2 ml-[22px] max-w-[308px] text-[14px] leading-5">
                  {community.des}
                </div>
              </div>
              <Link
                href={community.link}
                className=" w-[308px] bg-[#9D2117] rounded-[4px] px-6 py-4 flex left-[70px] bottom-[90px]
                  text-white font-nuku text-[24px] leading-7 items-center justify-center absolute z-[12]
                  hover:scale-105 transition-all duration-200"
              >
                JOIN
              </Link>
              <div className=""></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
