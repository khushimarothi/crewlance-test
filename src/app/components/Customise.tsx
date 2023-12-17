import Image from 'next/image'
import img1 from '../../../public/assets/img1.png'
import img2 from '../../../public/assets/img2.png'
import img3 from '../../../public/assets/img3.png'
const Customise = () => {
    return (
        <div>
            <div className="pt-20 pb-20 p-6 px-4 bg-rose-900  ">
                {/* --------------------------------------------------------- */}
                <div className="flex flex-col justify-center items-center gap-7 ">
                    <div className="mb-5">
                        <h1 className="text-center font-medium text-white lg:text-5xl md:text-5xl text-3xl lg:md:mb-3 mb-2">Customizable Portfolios</h1>
                        <p className="text-center font-light text-white lg:text-5xl text-2xl">Built for Independents</p>
                    </div>
                    <div>
                        <button className="border border-white text-white font-medium  text-xl px-5 py-3 rounded-full" >Get Access</button>
                    </div>
                </div>
{/* --------------------------------------------------------- */}


                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center pt-8 px-5 gap-5 mb-5">

                    <div className="flex flex-col justify-center items-center px-5 flex-1" >
                        <div><Image src={img1} alt='img' /></div>
                        <h1 className='text-center text-white text-3xl font-medium mt-2'>Launch</h1>
                        <h1 className='text-center text-white text-3xl font-light'>in minutes</h1>
                        <p className='pt-3 text-white  text-center  lg:text-2xl text-lg px-5'>AI-powered tools get your portfolio up and running quickly.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center px-5 flex-1" >
                        <div><Image src={img2} alt='img' /></div>
                        <h1 className='text-center text-white text-3xl font-medium mt-2'>Put your portfolio</h1>
                        <h1 className='text-center text-white text-3xl font-light'>to work</h1>
                        <p className='pt-3 text-white  text-center lg:text-2xl  text-lg px-5'>Manage contracts, sign clients, and get paid commission-free— all from your portfolio.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center px-5 flex-1" >
                        <div><Image src={img3} alt='img' /></div>
                        <h1 className='text-center text-white text-3xl font-medium mt-2'>Supercharge</h1>
                        <h1 className='text-center text-white text-3xl font-light'>your discoverability</h1>
                        <p className='pt-3 text-white  text-center lg:text-2xl text-lg px-5'>Boost your ranking in Discover and increase portfolio views.</p>
                    </div>
                    

                </div>

                


{/* --------------------------------------------------------- */}
            </div>
        </div>



    )
}

export default Customise