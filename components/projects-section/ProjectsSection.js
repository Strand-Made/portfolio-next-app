import Link from "next/link";
import ProjectsContainer from "./ProjectsContainer";
import ProjectCard from "./ProjectCard";
import { IoMdInformationCircle } from "react-icons/io";

const ProjectsSection = () => {
  return (
    <ProjectsContainer>
      <h2 className="text-3xl text-center text-gray-1">Projects</h2>
      <div className="flex flex-col items-center my-3">
        <ProjectCard />
      </div>
      <div className="flex items-center">
        <IoMdInformationCircle className="text-5xl" />
        <p className="font-body text-xs max-w-prose">
          You are free to contact me to see more projects, or you can check out
          my github&nbsp;
          <Link href="https://github.com/Strand-Made/">
            <a className="text-indigo-3 hover:underline focus:underline">
              here
            </a>
          </Link>
        </p>
      </div>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
