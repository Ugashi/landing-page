import Image from "next/image";
import mountain from "@/images/welcome/MONTAIN.png";
import logo from "@/images/welcome/logo.png";
import bunny from "@/images/welcome/bunny.png";
import grass from "@/images/welcome/grass.png";
import petals from "@/images/welcome/petals.png";
import UsagiWelcome from "../svgs/usagi-welcome";
import cloudleft from "@/images/welcome/whitetree1.png";
import cloudright from "@/images/welcome/whitetree2.png";
import SocialLinks from "./social-links";

export default function Welcome() {
  return (
    <section className="w-full flex items-center justify-center max-w-[1440px] bg-[#F4EBE4] relative z-[11]">
      {/* social links */}
      <SocialLinks />

      {/* mountain background */}
      <div className="flex flex-col items-center">
        <Image src={mountain} alt="mountain" />
      </div>

      {/* logo */}
      <div className="absolute top-0 z-[5]">
        <Image src={logo} alt="logo" />
      </div>

      {/* main bunny */}
      <div className=" absolute top-[189px] z-[4]">
        <Image src={bunny} alt="bunny" />
      </div>

      {/* usagi */}
      <div className="absolute top-[189px] z-[3]">
        <UsagiWelcome />
      </div>

      {/* petals */}
      <div className=" absolute top-[86px] z-[7]">
        <Image src={petals} alt="petals" />
      </div>

      {/* clouds */}
      <Image
        src={cloudleft}
        alt="cloudleft"
        className="absolute z-[9] top-[127px] left-0"
      />
      <Image
        src={cloudright}
        alt="cloudright"
        className="absolute z-[9] top-0 right-[27px]"
      />

      {/* grass */}
      <div className="absolute top-[142px] z-[5]">
        <Image src={grass} alt="grass" />
        {/* welcome text */}
        <div className="w-full h-[251.616px] bg-transparent mt-[-1px] pt-[84.69px]">
          <p className="ml-[120px] max-w-[692px] text-[24px] leading-7 text-[#EADACB]">
            Welcome to Usagi, the meme coin inspired by the playful and
            adventurous spirit of rabbits! Usagi is more than just a
            cryptocurrency; it’s a community-driven project that combines the
            fun of memes with the innovative world of decentralized finance
            (DeFi).
          </p>
        </div>
      </div>
    </section>
  );
}
