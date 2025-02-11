import {  FaServer, FaTools, FaBrain } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import Skill from "./Skill";

const Skills = () => {
  return (
// each skill will be a component
    <div className="bg-gray text-white">
      <div className="container mx-auto px-4 py-10 justify-center items-center">
        <h1 className="text-2xl font-semibold">Skills</h1>
        <div className="h-[3px] w-[100px] bg-primary my-4"></div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 justify-center place-items-center">
          <Skill
            title="Data Science & AI"
            icon={FaBrain}
            text={`
              Machine Learning & Deep Learning 
              LLMs & NLP
              Data Analytics & Visualization
            `}
          />
          <Skill
            title="Frontend & Mobile Development"
            icon={MdComputer}
            text={`
              React.js, React Native
              Tailwind CSS, Material UI
              UI/UX Principles
            `}
          />
          <Skill
            title="Backend & Databases"
            icon={FaServer}
            text={`
              FastAPI 
              SQL & Databases 
              AWS Temelleri 
            `}
          />
          <Skill
            title="DevOps & Tools"
            icon={FaTools}
            text={`
              Linux Systems, Docker
              Git & CI/CD
              Raspberry Pi & IoT
            `}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;