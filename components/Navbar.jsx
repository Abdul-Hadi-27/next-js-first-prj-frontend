import Image from "next/image";
import React from "react";
import myntra from "../public/myntra.png";
import Link from "next/link";
import { Handbag, Heart, Search, User } from "lucide-react";

const Navbar = () => {

  return (
    <>
      <div className="w-full  px-2 py-4 flex items-center justify-between border-b border-[#f3f3f6] shadow-md  ">
        <Link href='/' className="w-1/10 select-none">
          <Image
           src={myntra} alt="no image" width={100} height={100} />
        </Link>
        <div className="flex gap-x-10 w-1/3 text-sm font-medium whitespace-nowrap uppercase">
          <Link href="/mobiles">Mobiles</Link>
          <Link href="/fashion">Fashion</Link>
          <Link href="electronics">
            Electronics <sup className="text-pink-400 font-bold">new</sup>
          </Link>
          <Link href="home-kitchen">Home-Kitchen</Link>
        </div>
        <div className="flex w-1/3    items-center relative">
          <Search size={18} className="ml-4 absolute " />{" "}
          <input
            className="py-2 px-15 w-full border border-gray-200 focus:bg-transparent outline-0 text-sm rounded-md bg-[#F5F5F6] "
            type="text"
            placeholder="Search for mobiles,fashion and more"
          />
        </div>

        <div className="flex items-center w-1/6 gap-x-6 px-2">
          <Link href="" className="flex flex-col items-center">
            <User size={18} />
            <span className="text-sm">Profile</span>
          </Link>

          <Link
            href=""
            className="flex flex-col items-center justify-center text-center"
          >
            <Heart size={18} />
            <span className="text-sm">Wishlist</span>
          </Link>

          <Link
            href=""
            className="flex flex-col items-center justify-center text-center"
          >
            <Handbag size={18} />
            <span className="text-sm">Bag</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
