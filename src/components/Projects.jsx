import Project from './Project';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaDocker, FaAws } from 'react-icons/fa'
import { SiMongodb,  SiJavascript } from 'react-icons/si';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    link: 'https://example.com/project1',
    technologies: [<FaReact key="react" />, <FaNodeJs key="nodejs" />, <SiMongodb key="mongodb" />],
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    link: 'https://example.com/project2',
    technologies: [<FaHtml5 key="html5" />, <FaCss3Alt key="css3" />, <SiJavascript key="javascript" />],
    
  },
  {
    title: 'Project 3',
    description: 'Description for project 3',
    link: 'https://example.com/project3',
    technologies: [<FaGithub key="github" />, <FaDocker key="docker" />, <FaAws key="aws" />],
    
  },
];

const Projects = () => {
  return (
    <section className="bg-gray text-white py-20">
      <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold ">My Projects</h1>
      <div className="h-[3px] w-[100px] bg-primary my-4"></div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <a className='text-[16px]'>
            These are the projects I can present. Excluding the small ones.
            </a>
          </div>
          {projectsData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;