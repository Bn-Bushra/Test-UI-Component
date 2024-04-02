import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {HomePageHero} from "@/components/Home/components/Hero";
import {HomePageCard} from "@/components/Home/components/Card";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4">
      <Header/>
        <HomePageHero/>
        <div className="grid md:w-fit lg:grid-cols-3 ">
            <HomePageCard/>
            <HomePageCard/>
            <HomePageCard/>
        </div>
      <Footer/>
    </main>
  );
}
