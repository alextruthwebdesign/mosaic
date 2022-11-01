import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLinks from "./Navlinks";

const style = "w-[30px] h-[4px] bg-black";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    function closeMenu() {
      if (window.innerWidth > 1005) {
        setNavbarOpen(false);
      }
    }
    window.addEventListener("resize", closeMenu);
    return () => removeEventListener("resize", closeMenu);
  }, []);

  return (
    <div className="flex items-center justify-between w-full p-2 pt-[30px]">
      <div className="relative w-[88px] h-[73px] z-10">
        <Image src="/images/Group1.png" alt="logo" fill />
      </div>
      <NavLinks
        btn={
          "bg-[#EDB331] uppercase font-bold rounded-[5px] py-3 w-[113px] text-white"
        }
        modifiers={
          "hidden mobile:flex items-center gap-x-[30px] font-bold uppercase text-[13px] ml-2"
        }
      />
      <div
        className="cursor-pointer mobile:hidden z-10"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div
          className={`${style} mb-1 rotate-0 translate-y-0
          }`}
        ></div>
        <div className={`${style} mb-1 opacity-1`}></div>
        <div className={`${style} rotate-0 translate-y-0`}></div>
      </div>
      <NavLinks
        setNavbarOpen={setNavbarOpen}
        mobile
        btn={"bg-[#EDB331] uppercase font-bold rounded-[5px] py-3 w-[113px]"}
        modifiers={`${
          navbarOpen ? "flex" : "hidden"
        } transition-opacity duration-700
         fixed uppercase font-semibold z-20 w-full h-full top-0 left-0 bg-[#3F93A5] flex-col items-center pt-[7rem] text-white gap-y-2.5
      `}
      />
    </div>
  );
}

export default Navbar;
