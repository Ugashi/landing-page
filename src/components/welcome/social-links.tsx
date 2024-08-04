import { motion } from "framer-motion";
import { XIcon, DiscordIcon, TelegramIcon } from "../svgs/social-icons";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    link: "/",
    icon: XIcon,
  },
  {
    link: "/",
    icon: TelegramIcon,
  },
  {
    link: "/",
    icon: DiscordIcon,
  },
];

export default function SocialLinks({
  isAnimationComplete,
  scrollPosition,
}: Readonly<{
  isAnimationComplete: boolean;
  scrollPosition: number;
}>) {
  const cloudRightStyle = (delay: number) => {
    return {
      right: isAnimationComplete
        ? `${64.4 - delay - scrollPosition / 2}px`
        : "64.4px",
    };
  };
  return (
    <div className="flex overflow-hidden flex-col justify-start items-end gap-5 absolute z-[9] top-[60px] right-0 w-[134.4px]">
      {SOCIAL_LINKS.map((social, index) => {
        return (
          <motion.div
            key={index}
            initial={{ x: "250%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 1.5,
              delay: 2.0 + (2 - index) * 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative size-[70px]"
            style={cloudRightStyle(index * scrollPosition * 0.08)}
          >
            <Link
              className="size-[70px] flex items-center justify-center bg-[url('/images/welcome/outerIcon.png')] "
              href={social.link}
            >
              <div
                className={`size-[60px] overflow-hidden ${
                  index !== 1 ? "bg-[#BD524A]" : ""
                } rounded-full flex items-center justify-center`}
              >
                {social.icon()}
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
