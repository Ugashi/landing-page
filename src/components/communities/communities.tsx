import communitycard from "@/images/community/cardbackground.png";
import Image from "next/image";
import discord from "@/images/community/discord.png";
import x from "@/images/community/x.png";
const COMMUNITY_INFO = [
  {
    title: "Join our Discord!",
    img: discord,
    des: "Where you can chat with other SEIYANs, earn money making memes, and likely lose braincells in the process.",
    link: "/",
  },
  {
    title: "Join our Discord!",
    img: x,
    link: "/",
    des: "Where we post our best SEIYAN memes and scream AAAAAA pretty regularly.",
  },
  {
    title: "Comming soon",
    img: x,
    des: "",
    link: "/",
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
              <Image
                src={community.img}
                alt="discord"
                className="absolute z-[11] left-[53.03px] top-[39.87px]"
              />

              <div className=""></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
