import Link from "next/link";

import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center h-full lg:h-96 my-10 lg:my-20 text-center md:text-left space-y-4 lg:space-y-0">
      {/* Left part */}
      <div className="w-full lg:w-1/2 space-y-4 lg:space-y-8">
        <h1 className="text-4xl lg:text-6xl font-black font-oswald">
          Dive Into Delicious Meal Dishes 😍
        </h1>
        <p className="lg:text-lg">
          Discover a world of bold flavors and fresh ingredients. From signature
          classics to chef-curated specials, every dish is made to satisfy your
          cravings and elevate your dining experience. Come hungry, leave happy.
        </p>

        <Button asChild className="rounded-full px-8 py-6">
          <Link href={"#menu"}>Explore Menu</Link>
        </Button>
      </div>

      {/* Right part */}
      <div className="w-full lg:w-1/2">
        <img src={"/images/hero-img-1.png"} className="lg:h-96 mx-auto" />
      </div>
    </section>
  );
}
