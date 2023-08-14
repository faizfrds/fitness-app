import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-16">
      <div className="text-3xl font-bold pb-10">
        Find Your Perfect Workout Routine
      </div>
      <div className="align-top">
      <Search />
      </div>
      
        
    </main>
  );
}
