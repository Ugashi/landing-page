import bluebuny from "@/images/howto/mainimage.png";
import Image from "next/image";
import CopyIcons from "../svgs/copy-icons";
import decorator from "@/images/howto/decorator.png";
import Link from "next/link";

const START_GUIDE = [
  "Add $SEI network to your Metamask wallet",
  "Import token to your wallet",
  "Link your EVM address to your $SEI address",
  <p key={"guide link"}>
    It&apos;s important to link your address before interacting with any dApps!
    <Link
      href="https://app.sei.io/"
      rel="noopener noreferrer"
      target="_blank"
      className="ml-1 hover:text-blue-600 hover:underline transition-all duration-200 hover:scale-105"
    >
      Link here
    </Link>
  </p>,
  "Swap Fiat or Crypto for $SEI",
  "Buy through our partners at DragonSwap",
];

export default function HowToBuy() {
  return (
    <section className="w-full relative">
      {/* main image */}
      <Image
        src={bluebuny}
        alt="bluebuny"
        className="absolute top-[-161.11px] left-[33px]"
      />

      {/* guide */}
      <div className="w-full flex justify-end">
        <div className="mt-12 mr-[116.24px] relative w-full max-w-[590px] flex flex-col gap-8 justify-start items-start">
          <p className="w-full font-nuku text-[48px] leading-[56px]">
            HOW TO BUY
          </p>
          {/* USAGI CA */}
          <div className="w-full">
            <p className="mb-4 text-[24px] leading-8 tracking-[-0.48px] font-bold">
              $USA CA:
            </p>
            <div className="flex items-center gap-5 px-4 py-3 relative z-[2]">
              <Image
                src={decorator}
                alt="decorator"
                width={620}
                className="absolute z-[-10] left-[-25px]"
              />
              {/* address */}
              <p className="text-[20px] leading-6 tracking-[-0.4px] font-medium">
                0x5c85726f71aFB7e26d769fB559Ce0168CE1F8f4E
              </p>
              <button
                className="p-2 bg-[#EADACB] rounded-lg hover:scale-105 transition-all duration-200"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "0x5c85726f71aFB7e26d769fB559Ce0168CE1F8f4E"
                  );
                }}
              >
                <CopyIcons />
              </button>
            </div>
          </div>
          {/* steps */}
          <div className="w-full">
            <p className="mb-4 text-[24px] leading-8 font-bold tracking-[-0.48px]">
              Getting Started on $SEI:
            </p>
            <div className="flex flex-col w-full items-start justify-start text-[20px] leading-7 tracking-[-0.4px] font-medium gap-0">
              {START_GUIDE.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full gap-1 flex items-start justify-start"
                  >
                    <p>{index + 1}.</p>
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
