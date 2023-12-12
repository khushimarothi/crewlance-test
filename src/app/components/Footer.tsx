"use client"
import { FaTiktok, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import { useSearchParams } from 'next/navigation'
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import LogoDark from "../../../public/assets/logoDark.png";

const Footer = () => {
  const searchParams = useSearchParams()
  const userType = searchParams.get('userType')


  return (
    <div className={` pt-4 ${ 
      userType != "freelance" ? "bg-white text-black" : "bg-black text-white"
    }`}>

      {/* footer start */}
      <div className="w-full flex flex-row flex-wrap p-5 ">

        {/* for freelancer */}
        <div className="p-4 lg:pr-14">
          <h5 className="text-gray-400 text-transform: uppercase text-xs font-bold tracking-widest">
            for freelancer
          </h5>
          <ul className="pt-4 text-gray-700">
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              CrewLance for freelancer
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              CrewLance Pro
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              Portfolios
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              How it works
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider">
              Commission-free
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider">
              Top Independents
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider">
              Free invoice generator
            </li>
          </ul>
        </div>
{/*for hiring  */}
        <div className="p-4 lg:pr-14">
          <h5 className="text-gray-400 text-transform: uppercase text-xs font-bold tracking-widest">
            for hiring
          </h5>
          <ul className="pt-4 text-gray-700">
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              CrewLance for hiring
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              CrewLance for teams
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              Expert networks
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              How it works
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider">
              Hire on CrewLance
            </li>
          </ul>
        </div>
{/* why CrewLance */}
        <div className="p-4 lg:pr-14">
          <h5 className="text-gray-400 text-transform: uppercase text-xs font-bold tracking-widest">
            why CrewLance
          </h5>
          <ul className="pt-4 text-gray-700">
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              Success stories
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              Tips & guides
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              FAQ
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              Mission
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider">
              Careers
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider">
              Support
            </li>
          </ul>
        </div>

{/* hire freelancer */}
        <div className="p-4 lg:pr-14">
          <h5 className="text-gray-400 text-transform: uppercase text-xs font-bold tracking-widest">
            hire freelancer
          </h5>
          <ul className="pt-4 text-gray-700">
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              Design
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              Engineering
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              Marketing
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              Music & audio
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider">
              Social media
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider">
              video & animation
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider">
              Writing
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider">
              Explore all
            </li>
          </ul>
        </div>
{/* drops */}
        <div className="p-4">
          <h5 className="text-gray-400 text-transform: uppercase text-xs font-bold tracking-widest">
            drops
          </h5>
          <ul className="pt-4 text-gray-700">
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              Latest Video
            </li>
            <li className="text-md pb-2 font-semibold cursor-pointer  hover:underline tracking-wider ">
              Freelance industry report
            </li>
          </ul>
          <h5 className="text-gray-400 text-transform: uppercase text-xs font-bold tracking-widest pt-5">
            social
          </h5>
          <div className="flex flex-row flex-wrap pt-4">
            <FaTiktok size={45} className="pr-5" />
            <FaTwitter size={45} className="pr-5" />
            <FaInstagram size={45} className="pr-5" />
            <FaPinterest size={45} className="pr-5" />
          </div>
        </div>
      </div>

{/* the bottom footer */}
      <div className="flex flex-row justify-between flex-wrap items-center p-4">
          <div className="pr-4 mb-2">
          <Image src={userType == "freelance" ? LogoDark : Logo} alt="logo" className="w-full h-20 mr-2" />
          </div>
        
          <div className="pl-4 mb-3 f">
            <a href="#">Terms & Conditions</a>
            <span> | </span>
            <a href="#">Privacy Policy</a>
            <span> | </span>
            <a href="#">Cookie Policy</a>
            <span> | </span>
            <a href="#">Code of Conduct</a>
          </div>

        </div>
      </div>

  );
};

export default Footer;
