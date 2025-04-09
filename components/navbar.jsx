import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mt-5">
      <div>
        <h1 className="text-3xl">Restaurant</h1>
      </div>

      <ul className="flex justify-between items-center gap-8">
        <li className="cursor-pointer hover:text-primary">About Us</li>
        <li className="cursor-pointer hover:text-primary">Menu</li>
        <li className="cursor-pointer hover:text-primary">Reviews</li>
        <li className="cursor-pointer hover:text-primary">Contacts</li>
        <li>
          <Button className="rounded-full px-6">Reserve Table</Button>
        </li>
      </ul>
    </nav>
  );
}
