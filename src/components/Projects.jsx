import Project from './Project';
import {  FaHtml5, FaCss3Alt, FaGithub, FaDocker, FaAws, FaPython } from 'react-icons/fa';
import {  SiJavascript, SiTensorflow, SiKeras, SiOpencv, SiNumpy, SiPandas } from 'react-icons/si';

const projectsData = [
  {
    title: 'Tomato Leaf Disease Detection with MobileNet',
    description: "This project is a deep learning application that uses the MobileNet architecture to detect diseases in tomato leaves. The model is trained to identify multiple diseases with high accuracy, making it a valuable tool for farmers.",
    link: 'https://github.com/ferdiYilmaz41/tomato-disease-detection-model',
    technologies: [<FaPython key="python" />, <SiTensorflow key="tensorflow" />, <SiKeras key="keras" />, <SiOpencv key="opencv" />, <SiNumpy key="numpy" />, <SiPandas key="pandas" />],
  },
  {
    title: 'ML Hyperparameters Optimization',
    description: 'A Python toolkit for hyperparameter optimization in machine learning models. The project leverages both traditional grid search (via scikit-learn) and custom meta-heuristic algorithms(such as Grey Wolf Optimizer (GWO), Whale Optimization Algorithm (WOA), and Differential Evolution (DE)) to fine-tune models like AdaBoost, Decision Trees, Gradient Boosting, Logistic Regression, Random Forest, and SVM for enhanced predictive performance.',
    link: 'https://github.com/ferdiYilmaz41/ML-parameters-optimization',
    technologies: ""
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
    <section className="bg-darkGray text-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <div className="h-[3px] w-[100px] bg-primary my-4"></div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <a className='text-2xl'>
              Here is a selection of my key projects.
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