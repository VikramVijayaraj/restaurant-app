import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Label } from "./ui/label";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mt-5">
      <div>
        <h1 className="text-xl lg:text-3xl">Restaurant</h1>
      </div>

      {/* For lg screen sizes */}
      <ul className="hidden lg:flex justify-between items-center gap-8">
        <li className="cursor-pointer hover:text-primary">About Us</li>
        <li className="cursor-pointer hover:text-primary">Menu</li>
        <li className="cursor-pointer hover:text-primary">Reviews</li>
        <li className="cursor-pointer hover:text-primary">Contacts</li>
        <li>
          <Button className="rounded-full px-6">Reserve Table</Button>
        </li>
      </ul>

      {/* For md and sm screen sizes */}
      <div className="flex lg:hidden">
        {/* Categories */}
        <Sheet>
          <SheetTrigger className="hover:bg-primary rounded-full p-3">
            <Menu />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#FFFCF7] w-3/4 md:w-1/2 pt-10"
          >
            {/* <SheetHeader className="mb-4">
              <SheetTitle className="text-left">Browse Categories</SheetTitle>
            </SheetHeader> */}
            <Label className="space-y-2 text-lg">
              <SheetClose asChild>
                <Link
                  href={"/"}
                  className="py-2 flex justify-between items-center hover:underline hover:text-primary"
                >
                  About Us
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={"/"}
                  className="py-2 flex justify-between items-center hover:underline hover:text-primary"
                >
                  Menu
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={"/"}
                  className="py-2 flex justify-between items-center hover:underline hover:text-primary"
                >
                  Reviews
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={"/"}
                  className="py-2 flex justify-between items-center hover:underline hover:text-primary"
                >
                  Contacts
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={"/"}
                  className="py-2 flex justify-between items-center hover:underline hover:text-primary"
                >
                  Reserver Table
                </Link>
              </SheetClose>
            </Label>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
