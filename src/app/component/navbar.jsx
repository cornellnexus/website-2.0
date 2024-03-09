"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Team", path: "/team" },
    { id: 4, text: "Support", path: "/support" },
    { id: 5, text: "Apply", path: "/apply" },
    { id: 6, text: "Contact", path: "/contact" },
  ];

  return (
    <nav>
      <div className="flex items-center justify-between px-12 py-4">
        {/* Desktop */}
        <Link href="/">
          <Image
            id="nexus-logo"
            priority
            src={"/nexus.svg"}
            width="100"
            height="100"
            alt="Nexus Logo"
          />
        </Link>

        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              className="p-3 hover:bg-aqua hover:text-black rounded-xl mx-2 cursor-pointer duration-300"
              href={item.path}
            >
              {item.text}
            </Link>
          ))}
        </ul>

        {/* Mobile */}
        <div onClick={handleBurger} className="block md:hidden">
          {burger ? (
            <Image
              src={"x.svg"}
              width="20"
              height="20"
              alt="burger-menu-close"
            />
          ) : (
            <Image
              src={"burger-menu.svg"}
              width="20"
              height="20"
              alt="burger-menu-open"
            />
          )}
        </div>

        <ul
          className={
            burger
              ? "fixed md:hidden flex flex-col left-0 top-0 w-[60%] h-full bg-white shadow-lg ease-in-out duration-500"
              : "fixed flex flex-col left-[-100%] bottom-0 top-0 w-[60%] bg-white shadow-lg ease-in-out duration-500"
          }
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              className="p-3 hover:bg-teal hover:text-white duration-300 border-b border-grey cursor-pointer"
              href={item.path}
            >
              {item.text}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
