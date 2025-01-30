import Project from './Project';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    link: 'https://example.com/project2',
  },
  {
    title: 'Project 3',
    description: 'Description for project 3',
    link: 'https://example.com/project3',
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;