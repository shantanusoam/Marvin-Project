import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "./Link";
import Sidemenu from "./Sidemenu";
import { useCycle } from "framer-motion";
const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const navigation = [
    {
      id: 1,
      name: "home Page",
      href: "#home",
    },
    {
      id: 2,
      name: "Generate",
      href: "#home",
    },
    {
      id: 3,
      name: "Pricing Plan",
      href: "#home",
    },
    {
      id: 4,
      name: "Blog-News",
      href: "#home",
    },
  ];
  const navigation0 = [
    {
      id: 1,
      name: "About Us",
      href: "#home",
    },
    {
      id: 2,
      name: "Feature",
      href: "#home",
    },
    {
      id: 3,
      name: "Collection-2023",
      href: "#home",
    },
    {
      id: 4,
      name: "career",
      href: "#home",
    },
  ];
  return (
    <>
      <Sidemenu Links={[navigation, navigation0]} open={open} />
      <div className="flex h-auto w-full flex-row item  p-8">
        <div className="flex flex-1 items-center justify-start">
          <div className="flex items-center">
            <div className="font-bold text-xl text-black">AIPatrn</div>
          </div>
        </div>
        <div className=" md:flex flex-row gap-20 hidden">
          <div className="flex  flex-col">
            {navigation.map((item, i) => (
              <Link key={i} item={item} />
            ))}
          </div>
          <div className="flex  flex-col pr-8 ">
            {navigation0.map((item, i) => (
              <Link key={i} item={item} />
            ))}
          </div>
        </div>
        <div className="group z-[200]">
          <button
            onClick={cycleOpen}
            type="button"
            className="relative rounded-full border border-gray-400 items-center justify-start px-4 py-2 flex flex-row pr-8"
          >
            <div className=" text-black pr-2 ">Menu</div>
            <IoMdArrowDropdown className="w-4 group-hover:animate-bounce group-hover:mt-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
