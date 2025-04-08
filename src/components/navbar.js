"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full flex items-center gap-4 p-4 transition-all ${
          isScrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        <Image
          src="/assets/image/Onlyหมึก.gif"
          width={60}
          height={60}
          alt="logopolice"
        />
        <div className="text-white text-xl">Hakuu Community</div>
      </div>
    </>
  );
}
