import usaleft from "@/images/license/usaleft.png";
import usaright from "@/images/license/usaright.png";
import battlebunny from "@/images/license/frog.png";
import Image from "next/image";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function License() {
  return (
    <div className="w-full 2xl:max-w-[1440px] relative bottom-0 h-[600px] z-[40]">
      <p className=" absolute uppercase text-[24px] leading-8 font-bold text-black  right-[57px] bottom-[263px]">
        License agreement
      </p>

      <button
        className="w-[257.695px] h-[67.032px] flex items-center z-[30] justify-center right-[57px] bottom-[113px] 
                      absolute bg-[url('/images/license/backtop.png')] text-[24px] leading-8 font-bold
                      hover:scale-105 duration-200"
        onClick={scrollToTop}
      >
        BACK TO TOP
      </button>

      <p className=" absolute uppercase text-[16px] leading-8 text-black font-bold right-[57px] bottom-[211px]">
        © 2024 by Sei Usagi. All rights reserved!
      </p>

      <div className="absolute bottom-0 left-0">
        <Image src={usaleft} alt="usaright" />
      </div>
      <div className="absolute bottom-[0px]  right-0">
        <Image src={usaright} alt="usaright" />
      </div>
      <div className="absolute bottom-0 left-0 z-[40] h-[637px] w-[853px]">
        <Image src={battlebunny} height={638} width={854} alt="bunny" />
      </div>
    </div>
  );
}
