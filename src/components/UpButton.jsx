import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Butonun görünürlüğünü ayarlamak için bir işlev
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Sayfa kaydırma olayını dinlemek için useEffect kullanma
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Sayfanın en üstüne kaydırmak için bir işlev
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed  right-4 text-4xl md:text-5xl lg:text-6xl bottom-[190px] lg:right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-primary text-white p-3 rounded-full shadow-lg  hover:bg-white hover:text-primary transition duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default UpButton;