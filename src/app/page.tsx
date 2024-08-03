import HowToBuy from "@/components/how-to-buy/how-to-buy";
import UsagiStory from "@/components/usagi-story/story";
import Welcome from "@/components/welcome/welcome";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center ">
      <Welcome />
      <UsagiStory />
      <div
        className=" relative w-full max-w-[1440px] flex flex-col items-center bg-[rgba(234,218,203,1)] 
      bg-[url('/images/background.png')] bg-opacity-[0.08] bg-blend-exclusion h-[2009px]"
      >
        <HowToBuy />
      </div>
    </main>
  );
}
