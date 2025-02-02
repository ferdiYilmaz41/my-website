import { FaGithub, FaRegEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-darkGray text-white py-8'>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Ferdi İslam Yılmaz</h2>
            <p className="text-sm">Passionate computer engineer and lifelong learner.</p>
            <p className="text-sm">Contact: <a href="mailto:yilmaz.ferdiislam@gmail.com" className="text-primary hover:underline">yilmaz.ferdiislam@gmail.com</a></p>
          </div>
          <div className="text-center text-sm mt-2 md:mt-0 md:mx-4">
            <p className="italic">&quot;In this life, everything happens in an instant.&quot;</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <a href="https://www.linkedin.com/in/yilmaz-ferdi" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='text-2xl text-primary hover:scale-110 cursor-pointer duration-200' />
            </a>
            <a href="https://github.com/ferdiYilmaz41" target="_blank" rel="noopener noreferrer">
              <FaGithub className='text-2xl text-primary hover:scale-110 cursor-pointer duration-200' />
            </a>
            <a href="mailto:yilmaz.ferdiislam@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaRegEnvelope className='text-2xl text-primary hover:scale-110 cursor-pointer duration-200' />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;