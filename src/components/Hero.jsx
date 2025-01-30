import Foto from '../assets/foto.png'
import { FaArrowRight, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
    return (
        <>
            <main className="bg-gray text-white ">
                <div className="container mx-auto px-4">
                    <div className='grid gap-12 grid-cols-1 lg:grid-cols-2 min-h-[500px]
                     place-items-center pt-20 md:py-0 '>
                        {/* image section */}
                        {/* <div className="grid col-span-2 relative h-full justify-center 
                    items-center py-5"> */}
                        <div className="relative h-full flex flex-col justify-between items-start  ">
                            <div className='w-[350px] sm:w-[400px] md:w-[450px] mt-4 lg:mt-36'>
                                <h1 className="text-4xl md:text-6xl font-semibold relative z-20
                                ">Ferdi İslam <br />Yılmaz.
                                </h1>
                                <div className="h-[3px] w-[100px] bg-primary mt-0"></div>
                            </div>
                            {/* Social contacts section */}
                            <div className='flex w-full gap-6 py-8 lg:mb-16 z-30 '>

                                <a href="https://www.instagram.com/ferdiyl" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className='text-2xl text-primary hover:scale-110 cursor-pointer duration-200' />
                                </a>
                                <a href="https://www.linkedin.com/in/yilmaz-ferdi" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className='text-2xl text-primary hover:scale-110 cursor-pointer duration-200' />
                                </a>
                                <a href="https://github.com/ferdiYilmaz41" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className='text-2xl text-primary hover:scale-110 cursor-pointer duration-200' />
                                </a>
                            </div>


                            <div className='absolute -right-6 lg:-right-[180px] bottom-0'>
                                <img src={Foto} alt="" className=' scale-100 relative z-10  w-[300px] 
                                 lg:w-[500px]
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