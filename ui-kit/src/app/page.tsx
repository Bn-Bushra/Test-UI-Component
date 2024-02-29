import HorzCard from "./components/HorzCard";
import VertCard from "./components/VertCard";
import VertCardII from "./components/VertCardII";

export default function Home() {
  return (
    <main className="bg-[#E2DEE9] flex min-h-screen flex-col items-center justify-between p-24">
      <HorzCard />
      <VertCard />
      <VertCardII />
    </main>
  );
}
