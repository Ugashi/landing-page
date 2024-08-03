import Image from "next/image";
import bunny from "@/images/license/bunny.png";

export default function License() {
  return (
    <div className="relative w-full mt-[120px]">
      <p className=" ml-[120px] uppercase text-[24px] leading-8 font-bold">
        NFT License agreement
      </p>
      <div className="absolute top-[-119px] w-[558.458px] h-[613.667px] overflow-hidden left-1/2 -translate-x-1/2">
        <Image src={bunny} alt="bunny" height={743} width={558} />
      </div>
    </div>
  );
}
