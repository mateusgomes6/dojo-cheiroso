import HomeHero from "./s-hero";
import HomeFeatures from "./s-features";
import HomeSchedule from "./s-schedule";
import HomeTeams from "./s-teams";
import HomeContact from "./s-contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        <HomeHero />
        <HomeFeatures />
        <HomeSchedule />
        <HomeTeams />
        <HomeContact />
      </main>
    </div>
  )
}
