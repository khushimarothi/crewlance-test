import Image from "next/image";
import PlayButton from '../../../public/assets/freelancers/playButton.svg'
import center from '../../../public/assets/freelancers/center.png'
import topRight from '../../../public/assets/freelancers/top-right.png'
import bottomLeft from '../../../public/assets/freelancers/bottom_left.png'
import bottomRight from '../../../public/assets/freelancers/bottom_right.png'


const ForFreelancer = () => {
  return (
    <div>
    <div className="flex" style={{ height: "calc(100% - 88px)" }}>
      {/* left */}
      <div className="flex flex-col self-center w-2/5 gap-4 pl-5 ">
        <span className="text-5xl font-bold">Independence</span>
        <span className="text-3xl tracking-wide">starts here.</span>
        <div className="flex control">
          <button
            type="button"
            className="text-white bg-primary-col hover:bg-primary-col-deep focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Started
          </button>
          <button
            type="button"
            className="flex items-center gap-2 text-white  border border-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {/* <img src="/assets/play-button.svg" alt="" className="w-4 h-4 " /> */}
            <Image src={PlayButton} alt="watch button" className="w-4 h-4 " />
            Watch
          </button>
        </div>
      </div>

      {/* right */}
      <div className="relative flex items-center justify-center w-3/5 right">
        <Image src={center} alt="graphics" className="absolute h-80 aspect-[16/9] rounded-xl right-16 top-16" />
        <Image src={topRight} alt="graphics" className="absolute top-0 right-0 h-32 rounded-xl aspect-square" />
        <Image src={bottomLeft} alt="graphics" className="absolute w-40 left-28 aspect-square bottom-10 rounded-xl" />
        <Image src={bottomRight} alt="graphics" className="absolute right-0 w-72 bottom-20 rounded-xl" />
      </div>


</div>


    </div>
  );
}

export default ForFreelancer