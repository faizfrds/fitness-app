import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16">
      <div className="text-3xl font-bold">
        Find Your Perfect Workout Routine
        
      </div>
      <Search />
        
    </main>
  );
}
