"use client";

import { useState } from "react";

import Breakfast from "./menu/breakfast";
import Lunch from "./menu/lunch";
import Dinner from "./menu/dinner";

export default function RegularMenu() {
  const [menu, setMenu] = useState("breakfast");

  function handleClick(currentMenu) {
    setMenu(currentMenu);
  }

  return (
    <section id="menu">
      <h1 className="text-center text-4xl font-oswald font-black mb-10">
        Our Menu
      </h1>
      <ul className="flex justify-center items-center gap-8 mb-10">
        <li
          onClick={() => handleClick("breakfast")}
          className={`border border-primary w-36 h-10 flex items-center justify-center rounded-full hover:bg-primary cursor-pointer ${
            menu === "breakfast" ? "bg-primary " : ""
          }`}
        >
          Breakfast
        </li>
        <li
          onClick={() => handleClick("lunch")}
          className={`border border-primary w-36 h-10 flex items-center justify-center rounded-full hover:bg-primary cursor-pointer ${
            menu === "lunch" ? "bg-primary " : ""
          }`}
        >
          Lunch
        </li>
        <li
          onClick={() => handleClick("dinner")}
          className={`border border-primary w-36 h-10 flex items-center justify-center rounded-full hover:bg-primary cursor-pointer ${
            menu === "dinner" ? "bg-primary " : ""
          }`}
        >
          Dinner
        </li>
      </ul>

      {menu === "breakfast" && (
        <div className="text-center text-xl font-semibold mb-10">
          <Breakfast />
        </div>
      )}
      {menu === "lunch" && (
        <div className="text-center text-xl font-semibold mb-10">
          <Lunch />
        </div>
      )}
      {menu === "dinner" && (
        <div className="text-center text-xl font-semibold mb-10">
          <Dinner />
        </div>
      )}
    </section>
  );
}
