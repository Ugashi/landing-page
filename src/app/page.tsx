import Communities from "@/components/communities/communities";
import HowToBuy from "@/components/how-to-buy/how-to-buy";
import License from "@/components/license/license";
import UsagiStory from "@/components/usagi-story/story";
import Welcome from "@/components/welcome/welcome";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center ">
      <Welcome />
      <UsagiStory />
      <div
        className=" relative w-full xl:max-w-[1440px] flex flex-col items-center bg-[rgba(234,218,203,1)] 
      bg-[url('/images/background.png')] bg-opacity-[0.08] bg-blend-exclusion h-[2009px]"
      >
        <HowToBuy />
        <Communities />
        <License />
        <button
          className="w-[257.695px] h-[67.032px] flex items-center justify-center right-[57px] bottom-[113px] 
      absolute bg-[url('/images/license/backtop.png')] text-[24px] leading-8 font-bold
        hover:scale-105 duration-200
      "
        >
          BACK TO TOP
        </button>
      </div>
    </main>
  );
}
