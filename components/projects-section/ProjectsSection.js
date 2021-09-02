import Link from "next/link";
import ProjectsContainer from "./ProjectsContainer";
import ProjectCard from "./ProjectCard";
import { IoMdInformationCircle } from "react-icons/io";

const ProjectsSection = ({ projects }) => {
  return (
    <ProjectsContainer>
      <h1 className="text-center text-gray-1">Projects</h1>
      <ul className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 justify-center my-3">
        {projects.map((project) => (
          <ProjectCard key={project.sys.id} project={project} />
        ))}
      </ul>
      <div className="flex items-center bg-indigo-3 rounded-xl mx-auto max-w-xl p-2">
        <div className="mr-2">
          <IoMdInformationCircle className="text-4xl" />
        </div>
        <p className="max-w-prose">
          You are free to {""}
          <Link href="/contact">
            <a className="text-indigo-4 font-bold hover:underline focus:underline">
              contact me
            </a>
          </Link>{" "}
          to see more projects, or you can check out my&nbsp;
          <Link href="https://github.com/Strand-Made/">
            <a className="text-indigo-4 font-bold hover:underline focus:underline">
              github
            </a>
          </Link>
        </p>
      </div>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
