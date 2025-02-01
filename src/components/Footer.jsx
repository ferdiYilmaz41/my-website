import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Mail from './Mail';

const Footer = () => {
  return (
    <div className='bg-darkGray text-white py-8'>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <p>&copy; 2025 Ferdi İslam Yılmaz. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
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
        </div>
        
      </div>
    </div>
  );
}

export default Footer;