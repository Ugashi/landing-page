import usaight from "@/images/story/usaright.png";
import usaleft from "@/images/story/usaleft.png";
import bunny from "@/images/story/bunny.png";
import Image from "next/image";

export default function UsagiStory() {
  return (
    <div className="w-full bg-white flex flex-col items-center relative z-[4]">
      {/* half black decorator */}
      <div className="w-full h-[124.69px] mt-[-114px] bg-[#161616]"></div>
      <section className="relative h-[1316px] w-full bg-[#FFF] flex flex-col items-center overflow-hidden z-[4]">
        <div className=" relative w-full h-[467px] bg-[url('/images/story/vector.png')] bg-cover"></div>

        {/* usagi text background decorator  */}
        <div className="absolute top-[72px] right-[-40px] w-[627px]">
          <Image src={usaight} alt="usaright" />
        </div>
        <div className="absolute top-[354px] left-0 w-[831px]">
          <Image src={usaleft} alt="usaleft" width={831} />
        </div>

        {/* main bunny */}
        <div className="absolute top-[307px] w-[690px] h-[830px] right-[40px]">
          <Image src={bunny} alt="bunny" width={690} height={830} />
        </div>

        {/* story */}
        <div className=" absolute left-[122px] top-[538px] max-w-[520px]">
          <p className="text-black text-[48px] leading-[56px] font-nuku">
            STORY ABOUT <span className="text-[#9D2117]">USAGI</span>
          </p>
          <div className="mt-8 text-[16px] leading-[24px] tracking-[-0.32px] text-black max-h-[381px] overflow-y-scroll invis-scroll">
            <p>
              In the ever-changing world of cryptocurrency, Usagi, the swift and
              cunning samurai rabbit, stands as a guardian of profit. As the
              market moves rapidly, with new narratives emerging every day,
              Usagi guides users through the chaos, helping them seize
              profitable opportunities. His extraordinary speed symbolizes the
              Sei blockchain, the fastest Layer 1 network, ensuring swift and
              reliable transactions. Usagi&apos;s mission is to be a steadfast
              companion, providing stability and confidence as users navigate
              the volatile market. With his guidance, traders can transform
              uncertainty into opportunity, making Usagi an indispensable ally
              in their journey
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
