import { Bowlby_One as Boldonse, Oswald } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

const boldonse = Boldonse({
  subsets: ["latin"], // Adjust based on the character sets you need
  display: "swap",
  variable: "--font-boldonse", // This defines the CSS variable name
  weight: "400", // Adjust the weight as needed
});

export const metadata = {
  title: "Restaurant",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-[#FFFCF7] ${boldonse.variable} ${oswald.variable}`}>
        <div className="px-10 lg:px-20 lg:my-10">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
