import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const ProjectCard = () => {
  const cardAnimationVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };

  return (
    <div className="block rounded-2xl shadow-md hover:shadow-sm relative bg-gray-1 h-48 w-2/3 max-w-xs">
      Card
      <motion.div
        initial="initial"
        whileHover="hover"
        variants={cardAnimationVariants}
        transition={{ duration: 0.4 }}
        className="bg-indigo-3 bg-opacity-5 flex flex-col items-center justify-between py-5 absolute w-full top-0 rounded-2xl h-full"
      >
        <h4 className="text-indigo-3">Project text</h4>
        <div>
          <Link href="/project">
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
