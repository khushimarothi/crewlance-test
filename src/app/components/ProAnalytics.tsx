import Image from 'next/image'
import pro1 from '../../../public/assets/pro1.png'
import pro2 from '../../../public/assets/pro2.png'


const ProAnalytics = () => {
    return (
        <div>
            <div className='bg-slate-800 p-5'>
                <div className="text-center pt-14">
                    <h1 className='text-white text-4xl lg:text-6xl mb-2'>Pro analytics </h1>
                </div>

                <div className="container pb-12 mx-auto max-h-max">
                    <div className="flex lg:flex-row flex-col justify-center gap-11 items-center px-10">
                        <div className="order-2 lg:order-1 lg:w-1/2">

                            <div className="flex flex-col lg:text-left text-center gap-1">
                                <h1 className='text-white font-semibold lg:text-6xl text-3xl'>Grow your</h1>
                                <h1 className='text-white font-light text-3xl lg:text-5xl'>Business</h1>
                            </div>
                            <div className='flex flex-row pt-4'>
                                <h1 className='text-white lg:text-2xl text-lg text-center lg:text-left pt-1'>Access insights like who’s viewing your portfolio (and where they’re coming from) so you can turn engagement into more earnings.</h1>
                            </div>
                        </div>

                        <div className='order-1 lg:order-2'>
                            {/* Image */}
                            <Image src={pro1} alt='img' className='w-full h-full' />
                        </div>



                    </div>
                </div>

                {/* --------------------------------------------------------------- */}
                <div className="text-center pt-24">
                    <h1 className='text-white text-4xl lg:text-6xl mb-2'> Custom Branding </h1>
                </div>

                <div className="container mx-auto pb-14 ">
                    <div className="flex lg:flex-row flex-col justify-center gap-12 items-center px-10">

                        <div >
                            {/* Image */}
                            <Image src={pro2} alt='img' className='w-full h-full' />
                        </div>
                        <div className=" lg:w-1/2">

                            <div className="flex flex-col lg:text-left text-center gap-1">
                                <h1 className='text-white font-semibold lg:text-6xl text-3xl'>Build your</h1>
                                <h1 className='text-white font-light text-3xl lg:text-5xl'>personal brand</h1>
                            </div>
                            <div className='flex flex-row pt-4'>
                                <h1 className='text-white lg:text-2xl text-lg text-center lg:text-left pt-1'>Customize your proposals, contracts, and invoices to impress clients.</h1>
                            </div>
                        </div>





                    </div>
                </div>



            </div>
        </div>
    )
}

export default ProAnalytics