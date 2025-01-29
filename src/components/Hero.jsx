import { FaArrowRight } from 'react-icons/fa'
import Foto from '../assets/gözlüklü.jpg'
const Hero = () => {
    return (
        <>
            <main className="bg-gray text-white">
                <div className="container">
                    <div className='grid grid-cols-1 md:grid-cols-2 min-h-[800px] place-items-center'>
                    {/* image section */}
                    <div className="grid grid-cols-2 margin-auto ">
                        <div>
                            <h1 className="text-7xl font-semibold">Ferdi İslam Yılmaz.</h1>
                            <div className="h-[3px] w-[100px] bg-primary"></div>
                        </div>

                    
                    <div>
                        <img src={Foto} alt="" />
                    </div>
                    </div>
                    {/* text content section */}
                    <div className=' space-y-5'>
                        <p className='text-sm leading-4 opacity-70 tracking-widest font-serif'>
                            - Introduction
                        </p>
                        <h1 className='text-3xl '>
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