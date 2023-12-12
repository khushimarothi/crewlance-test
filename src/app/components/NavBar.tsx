"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/logo.png";
import LogoDark from "../../../public/assets/logoDark.png";
import { useSearchParams } from 'next/navigation'



const NavBar = () => {
  const searchParams = useSearchParams()
  const userType = searchParams.get('userType')

  

  return (
    <div
      className={`flex items-center justify-between w-full h-10 px-4 py-2 ${
        userType == "freelance" ? "bg-black" : ""
      }`}
    >
      {/* logo */}
      <div className="h-full logo">
        <Image src={userType == "freelance" ? LogoDark : Logo} alt="logo" className="w-auto h-full" />
      </div>
      {/* cross button */}
      <div className="flex gap-5 auth-control">
        {userType != "freelance" && (
          <button
            type="button"
            className="px-5 py-1 text-sm font-medium text-black border-2 border-black rounded-full bg-transfer hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Hire on CrewLance
          </button>
        )}
        <Link
          href="/signup"
          className={`border-2 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-1
          ${
            userType == "freelance"
              ? "bg-white text-black hover:border-white hover:bg-black hover:text-white"
              : "bg-black  text-white   hover:border-black  hover:bg-white hover:text-black   "
          }`}
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className={`border-2 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-1
           ${
            userType == "freelance"
               ? " bg-black text-white  border-black hover:border-white hover:bg-black hover-text-white"
               : "bg-white text-black border-white hover:border-black hover:bg-white"
           }`}
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
