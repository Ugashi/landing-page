import Image from "next/image";
import {
  XIcon,
  DiscordIcon,
  YoutubeIcon,
  TelegramIcon,
} from "../svgs/social-icons";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    link: "/",
    icon: XIcon,
  },
  {
    link: "/",
    icon: YoutubeIcon,
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

export default function SocialLinks() {
  return (
    <div className="flex flex-col justify-start items-center gap-5 absolute z-[8] top-[60px] right-[64.4px]">
      {SOCIAL_LINKS.map((social, index) => {
        return (
          <Link
            className="size-[70px] flex items-center justify-center bg-[url('/images/welcome/outerIcon.png')] "
            key={index}
            href={social.link}
          >
            <div
              className={`size-[60px] overflow-hidden ${
                index !== 2 ? "bg-[#BD524A]" : ""
              } rounded-full flex items-center justify-center`}
            >
              {social.icon()}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
