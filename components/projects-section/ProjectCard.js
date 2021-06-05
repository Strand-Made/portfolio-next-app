import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const ProjectCard = () => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="block rounded-2xl shadow-md hover:shadow-sm relative bg-gray-1 h-48 w-2/3 max-w-xs"
    >
      Card
      {mouseHover ? (
        <div className="bg-indigo-3 bg-opacity-5 flex flex-col items-center justify-between py-5 absolute w-full top-0 rounded-2xl h-full">
          <h4 className="text-indigo-3">Project text</h4>
          <div>
            <Link href="/">
              <a className="block bg-pink-cta text-pink-white font-body text-base text-center w-36 shadow-md py-1 rounded-full">
                View
              </a>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectCard;
