import usaight from "@/images/story/usaright.png";
import usaleft from "@/images/story/usaleft.png";
import bunny from "@/images/story/bunny.png";
import Image from "next/image";

export default function UsagiStory() {
  return (
    <section className="relative mt-[-114px] h-[1316px]  w-full bg-[#FFF] 2xl:max-w-[1440px] flex flex-col items-center overflow-hidden z-[4]">
      <div className="w-full h-[124.69px] bg-[#161616]"></div>
      {/* half black decorator */}
      <div className=" relative w-full h-[352.4px] bg-[url('/images/story/vector.png')] bg-cover"></div>

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
            Once upon a time, In the heart of an ancient jungle, the legendary,
            Sei Usagi, moved with unmatched grace. Clad in a red kimono, he
            wielded his katanas with swift precision. Once a loyal samurai,
            disillusioned by endless wars, Usagi chose a path of solitude,
            vowing to protect the innocent.
          </p>
          <br />
          <p>
            One evening, Usagi found a village at the jungle&apos;s edge,
            gripped by fear. A young girl tearfully revealed that bandits had
            kidnapped her brother. Hayate, determined to help, ventured into the
            forest. He swiftly defeated the bandits, his movements a blur, and
            rescued the girl&apos;s brother.
          </p>
          <br />
          <p>
            The villagers, grateful and awestruck, thanked Usagi. &quot;I do
            what must be done,&quot; he replied simply, before disappearing into
            the forest. Hayate continued his solitary journey, a beacon of hope
            in a dark world. His legend grew, a timeless tale of bravery and
            justice. The Sei Usagi&apos;s story became part of the jungle,
            inspiring those who heard it.
          </p>
          <br />
          <p>
            Back to 23rd century, in the relentless crypto-finance market, the
            Sei Usagi embodies a trader&apos;s spirit. He navigates the volatile
            highs and crushing lows with the same grace he displayed in battle.
            The market&apos;s twists and turns are akin to the jungle&apos;s
            dangers, yet Sei Usagi remains fast and composed, executing trades
            with unparalleled speed and precision.
          </p>
          <br />
          <p>
            Sei Usagi&apos;s journey through the financial jungle mirrors his
            past. The exhilarating victories, when his decisions yield
            significant gains, feel like vanquishing the bandits. The crushing
            losses, akin to watching empires crumble, test his resilience. Yet,
            he remains unshaken, learning from each experience, ever faster and
            more insightful.
          </p>
          <br />
          <p>
            One day, the market plummeted, reminiscent of a sudden ambush.
            Traders panicked, much like the fearful villagers. Amidst the chaos,
            Sei Usagi stayed calm. He analyzed the market&apos;s patterns,
            identifying an opportunity. With swift precision, he made his move,
            capitalizing on the downturn. His actions brought stability, much
            like his rescue of the girl&apos;s brother, restoring hope among his
            peers.
          </p>
          <br />
          <p>
            As dawn broke, Sei Usagi prepared for another day in the market. The
            financial jungle, with its endless mysteries and hidden dangers,
            called to him. He had witnessed the rise and fall of countless
            trends, but his mission remained unchanged. He would navigate the
            market, protect his investments, and ensure his strategy prevailed,
            no matter how tumultuous the journey.
          </p>
        </div>
      </div>
    </section>
  );
}
