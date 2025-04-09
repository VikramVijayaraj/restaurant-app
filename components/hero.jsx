import Link from "next/link";

import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="flex items-center h-96 my-20">
      {/* Left part */}
      <div className="w-1/2 space-y-8">
        <h1 className="text-6xl font-black font-oswald">
          Dive Into Delicious Meal Dishes 😍
        </h1>
        <p className="text-lg">
          Discover a world of bold flavors and fresh ingredients. From signature
          classics to chef-curated specials, every dish is made to satisfy your
          cravings and elevate your dining experience. Come hungry, leave happy.
        </p>

        <Button asChild className="rounded-full px-8 py-6">
          <Link href={"#menu"}>Explore Menu</Link>
        </Button>
      </div>

      {/* Right part */}
      <div className="w-1/2">
        <img src={"/images/hero-img-1.png"} className="h-96 mx-auto" />
      </div>
    </section>
  );
}
