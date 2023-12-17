import Image from 'next/image'
import bg from '../../../public/assets/bg.png';
import { FaCircleCheck } from "react-icons/fa6";
const Compare = () => {
  return (

    <div>
      <div className="bg-rose-900 py-12 relative overflow-hidden">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-white">Compare <span className="text-5xl font-light">  plans & features </span></h1>
        </div>
        <div className="flex ">

          <div className="absolute left-0 z-0">
            <Image src={bg} alt='img' />
          </div>
        </div>

        <div className="flex items-center justify-center min-h-screen py-12 relative  mx-4 z-40">
          <div className="bg-white p-10 px-14 rounded-lg shadow-md">

            <div className='grid grid-rows-1 border-b-2 border-b-slate-200 '>
              <div className="grid grid-cols-12 lg:gap-7 mb-3">
                <div className="col-span-6"></div>
                <div className="col-span-3 hidden lg:block">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-2xl">Always Free</h2></div>
                    <button className="border border-black hover:bg-black hover:text-white font-semibold rounded-full mt-2 px-4 lg:py-2">Sign Up</button>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-center text-2xl">CrewLance Pro</h2></div>
                    <button className="border bg-violet-500 text-white font-bold rounded-full mt-2 px-4 py-2">Upgrade Pro</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-slate-200 py-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6">
                  <h1 className="text-lg text-left font-semibold">Commision-free payments</h1>
                </div>
                <div className="col-span-3 hidden lg:block">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"> <FaCircleCheck className="bg-violet" /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-slate-200 py-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 ">
                  <h1 className="text-lg text-left font-semibold">Freelance jobs feed</h1>
                </div>
                <div className="col-span-3 hidden lg:block">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-slate-200 py-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6">
                  <h1 className="text-lg text-left font-semibold">Basic portfolio, projects & services</h1>
                </div>
                <div className="col-span-3 hidden lg:block">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-slate-200 py-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 pr-12">
                  <h1 className="text-lg text-left font-semibold">Tools for invoicing, Contracting & <br /> project management</h1>
                </div>
                <div className="col-span-3 hidden lg:block">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-slate-200 py-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6">
                  <h1 className="text-lg text-left font-semibold">Basic analytics</h1>
                </div>
                <div className="col-span-3 hidden lg:block">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-slate-200 py-4'>
              <div className="grid grid-cols-12 gap-7 mb-3">
                <div className="col-span-6">
                  <h1 className="text-lg text-left font-semibold">Advanced analytics</h1>
                </div>
                <div className="col-span-3 hidden lg:block">

                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-slate-200 py-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 pr-12">
                  <h1 className="text-lg text-left font-semibold">Customizable portfolio templates</h1>
                </div>
                <div className="col-span-3 hidden lg:block">

                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-slate-200 py-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 pr-12">
                  <h1 className="text-lg text-left font-semibold">Unlimited portfolio templates</h1>
                </div>
                <div className="col-span-3 hidden lg:block">

                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-slate-200 py-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 pr-12">
                  <h1 className="text-lg text-left font-semibold">Custom portfolio logo, fonts & colors</h1>
                </div>
                <div className="col-span-3 hidden lg:block">

                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-rows-1 border-b-2 border-b-slate-200 py-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 pr-12">
                  <h1 className="text-lg text-left font-semibold">Custom domain support</h1>
                </div>
                <div className="col-span-3 hidden lg:block">

                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>

                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-rows-1 pt-4'>
              <div className="grid grid-cols-12 gap-7 mb-1">
                <div className="col-span-6 pr-12">
                  <h1 className="text-lg text-left font-semibold">Custom Branding</h1>
                </div>
                <div className="col-span-3 hidden lg:block">

                </div>
                <div className="lg:col-span-3 col-span-6">
                  <div className="flex flex-col justify-center items-center">
                    <div> <h2 className="text-bold text-xl"><FaCircleCheck /></h2></div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )

}
export default Compare;