'use client';
import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {HomePageHero} from "@/components/Home/components/Hero";
import {HomePageCard} from "@/components/Home/components/Card";
import { Accordion, AccordionItem } from '@/components/Home/components/Faq';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4 dark:bg-black">
      <Header/>
        <HomePageHero/>
        <div className="grid md:w-fit lg:grid-cols-3 ">
            <HomePageCard/>
            <HomePageCard/>
            <HomePageCard/>
        </div>
        <div className="w-full px-4 lg:px-9">
            <Accordion>
                <AccordionItem title="How long does the application process take?
" content="Typically, it takes less than 30 minutes to fill out the application. If you’re new to Wolt, you’ll need to create an account, enter a few basic details, and upload the required documents." />
                <AccordionItem title="Are there other requirements to deliver?
" content="You’ll need to be 18 years or older, and in possession of a valid work permit. Additional requirements vary depending on whether you want to deliver using a scooter, a car, or a bike. You’ll be informed about which documents are required based on your selected contract type." />
                <AccordionItem title="What does delivering using Wolt offer that traditional delivery jobs don’t?" content="Wolt Courier Partners are able to work flexible hours, whenever they choose. As a Courier Partner, you don’t have to choose between a traditional full-time or part-time food delivery job. Instead, as an independent contractor, you set on your own schedule." />
            </Accordion>
        </div>
        <Footer/>
    </main>
  );
}
