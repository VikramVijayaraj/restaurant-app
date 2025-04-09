import Link from "next/link";

import { Button } from "./ui/button";

export default function ReserveTableSection() {
  return (
    <div className="flex items-center pb-10 pl-20">
      <div className="w-1/2 space-y-6">
        <h1 className="capitalize text-4xl font-oswald font-black">
          do you have any plan today? Reserve your table
        </h1>
        <p>
          Enjoy a seamless dining experience by reserving your table in advance.
          Whether it's a special occasion or a casual outing, secure your spot
          and let us take care of the rest.
        </p>
        <Button asChild className="rounded-full px-8 py-6">
          <Link href={""}>Reserve Table</Link>
        </Button>
      </div>

      <div className="w-1/2">
        <img src={"/images/table.png"} className="h-80 mx-auto" />
      </div>
    </div>
  );
}
