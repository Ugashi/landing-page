import UsagiStory from "@/components/usagi-story/story";
import Welcome from "@/components/welcome/welcome";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center ">
      <Welcome />
      <UsagiStory />
    </main>
  );
}
