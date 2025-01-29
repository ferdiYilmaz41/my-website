import Foto from '../assets/gözlüklü.jpg'
import { FaArrowRight, FaDribbble, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
    return (
        <>
            <main className="bg-gray text-white">
                <div className="container">
                    <div className='grid gap-12 grid-cols-1 md:grid-cols-3 min-h-[600px]
                     place-items-center py-20 md:py-0'>
                        {/* image section */}
                        <div className="grid col-span-2 relative h-full justify-center 
                    items-center py-20">
                            <div className='w-[280px] sm:w-[400px] md:w-[450px]'>
                                <h1 className="text-4xl md:text-6xl font-semibold relative z-20
                            ">Ferdi İslam <br/>Yılmaz.</h1>
                                <div className="h-[3px] w-[100px] bg-primary mt-4"></div>
                            </div>
                            {/* Social contacts section */}
                            <div className='flex gap-6 mt-24'>
                                <FaDribbble className='text-2xl text-primary hover:scale-110 
                        cursor-pointer duration-200'/>
                                <FaInstagram className='text-2xl text-primary hover:scale-110 
                        cursor-pointer duration-200'/>
                                <FaLinkedin className='text-2xl text-primary hover:scale-110 
                        cursor-pointer duration-200'/>
                            </div>


                            <div className='absolute -right-6 md:-right-32 bottom-0'>
                                <img src={Foto} alt="" className=' scale-110 relative z-10  w-[150px] 
                                sm:w-[250px]
                        ' />
                            </div>

                        </div>
                        {/* text content section */}
                        <div className=' space-y-7 relative z-20'>
                            <p className='text-sm leading-4 opacity-70 
                        tracking-widest font-serif translate-y-3'>
                                - Introduction
                            </p>
                            <h1 className='lg:text-2xl text-3xl '>
                                Data scientist and computer engineer falan filon falan filon
                            </h1>
                            <p className='text-sm leading-5 opacity-70 '>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <button className='text-primary  border-b-2
                         border-primary text-xl font-bold p-1 flex items-center gap-2 group'>
                                My story
                                <FaArrowRight className='group-hover:translate-x-1 transition 
                            duration-200 '/>
                            </button>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero