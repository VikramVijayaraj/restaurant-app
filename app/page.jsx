import Hero from "@/components/hero";
import RegularMenu from "@/components/regular-menu";
import ReserveTableSection from "@/components/reserve-table-section";
import Reveiews from "@/components/reveiews";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <RegularMenu />
      <Reveiews />
      <ReserveTableSection />
    </div>
  );
}
