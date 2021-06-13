import Link from "next/link";

import Image from "next/image";
import { motion, useCycle } from "framer-motion";
const ProjectCard = ({ project }) => {
  const transition = { duration: 1, ease: "easeInOut" };
  const { description, image } = project.fields;

  const cardDisplayVariants = {
    initial: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0, transition },
    leave: { opacity: 0, y: -100, transition },
  };

  return (
    <motion.li
      initial="leave"
      animate="enter"
      exit="leave"
      variants={cardDisplayVariants}
      key={project.sys.id}
      className="block relative rounded-2xl transition-shadow duration-700 ease-in-out 
      shadow-lg hover:shadow-sm relative h-72 w-full max-h-96 max-w-lg  max-w-xs"
    >
      <Image
        className="absolute top-0 right-0 left-0 rounded-2xl"
        src={"https:" + image.fields.file.url}
        desc={description}
        layout="fill"
      />
      <CardContent project={project} />
    </motion.li>
  );
};

const CardContent = ({ project }) => {
  const transition = { duration: 0.4, ease: "easeOut" };
  const { title, shortDesc } = project.fields;

  const cardAnimationVariants = {
    initial: { opacity: 0, transition },
    hover: { opacity: 1, transition },
  };
  const [current, cycle] = useCycle("initial", "hover");
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      animate={current}
      onTap={() => cycle()}
      variants={cardAnimationVariants}
      className="bg-gradient-to-b from-indigo-3 to-indigo-4 flex flex-col items-center justify-between py-5
         absolute z-index-10 w-full top-0 rounded-2xl h-full"
    >
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-lg max-w-prose px-3">{shortDesc}</p>
      <div>
        <Link href="/project[id]" as={`/project/${project.sys.id}`}>
          <a
            className="block bg-indigo-1 text-gray-1 text-center
             w-36 shadow-md py-1 transition-colors duration-300 ease-linear rounded-full hover:bg-indigo-2 focus:bg-indigo-2 focus:shadow hover:shadow"
          >
            View
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
