import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import "../Project.css"; 
const Project = ({ title, description, link }) => {
  return (
    <div className="bg-white/70  p-6 rounded-lg  hover:animate-shake hover:text-[#001219] 
    hover:bg-[#f6bd60] transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-2 text-[#003049]">{title}</h2>
      <p className="text-sm mb-4 text-[#14213d] font-semibold leading-relaxed">-{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" 
      className="text-[#003049] hover:underline italic group flex items-center gap-2">
        View Project
        <FaArrowRight className="opacity-0 text-[10px] transition-opacity duration-300 group-hover:opacity-100 hover:text-black" />
      </a>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Project;