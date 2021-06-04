import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const ProjectCard = () => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="block rounded-2xl shadow-md bg-gray-1 h-48 w-2/3"
    >
      Card
      {mouseHover ? (
        <div className="bg-indigo-3 h-full">
          <h4>Project</h4>
          <Link href="/">
            <a className="text-gray-300">View</a>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectCard;
