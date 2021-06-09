import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const ProjectCard = ({ project }) => {
  const cardAnimationVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };

  return (
    <div
      key={project.id}
      className="block relative rounded-2xl transition-shadow duration-700 ease-in-out shadow-lg hover:shadow-sm relative h-56 md:h-72 max-h-96 max-w-lg w-2/3 max-w-xs"
    >
      <Image
        className="absolute top-0 right-0 left-0 rounded-2xl"
        src={project.image}
        desc={project.description}
        layout="fill"
      />

      <motion.div
        initial="initial"
        whileHover="hover"
        variants={cardAnimationVariants}
        transition={{ duration: 0.4 }}
        className="bg-indigo-3 bg-opacity-50 flex flex-col items-center justify-between py-5 absolute z-index-50 w-full top-0 rounded-2xl h-full"
      >
        <h4 className="text-xl">{project.title}</h4>
        <div>
          <Link href="/project[id]" as={`/project/${project.id}`}>
            <a className="block bg-pink-cta text-pink-white font-body text-base text-center w-36 shadow-md py-1 rounded-full hover:bg-indigo-3 focus:bg-indigo-3 focus:shadow hover:shadow">
              View
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
