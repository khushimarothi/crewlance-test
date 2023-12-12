import Image from "next/image";
import im1 from "../../../public/assets/im1.png";
type startProps = {
  title: string;
  subtitle: string;
  description: string;
}


const Start = ({ title, subtitle, description }: startProps) => {
  return (
    <div className="relative flex items-center w-full h-screen overflow-hidden bg-purple-200">
      <div className="container z-40 p-4">
        <div className="relative flex flex-row justify-center">
          <div className="flex flex-col justify-center px-9 ">
            <h1 className="text-3xl font-semibold lg:text-7xl">{title}</h1>
            <p className="pt-1 text-3xl font-light lg:text-7xl">{subtitle}</p>
            <div className="pt-5">
              <p className="text-base lg:text-2xl font-extralight">
                {description}
              </p>
            </div>
            <div className="pt-5">
              <button className="px-2 py-2 text-base font-bold text-white bg-blue-600 rounded-full lg:text-lg lg:px-5 lg:py-3 ">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full ">
        <div className="absolute -bottom-32 -right-24 ">
          {/* <img src="/assets/im1.png" alt="" className="lg:w-full lg:h-full " /> */}
          <Image src={im1} alt="side img" className="md:w-full h-auto w-96" />

        </div>
      </div>
    </div>
  );
};

export default Start;


