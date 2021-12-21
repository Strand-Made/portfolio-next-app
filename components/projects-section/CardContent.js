import { motion, useCycle } from "framer-motion";
import Link from "next/link";

const CardContent = ({ project }) => {
  const transition = { duration: 0.4, ease: "easeOut" };
  const { title, shortDesc } = project.fields;

  console.log(project);

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
      className="bg-gradient-to-b from-indigo-1 to-indigo-3 flex flex-col items-center justify-between py-5
           absolute z-index-10 w-full top-0 rounded-2xl h-full"
    >
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-lg max-w-prose px-3">{shortDesc}</p>
      <div>
        <Link
          href={project.sys.id ? "/project[id]" : "/"}
          as={`/project/${project.sys.id}`}
        >
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

export default CardContent;
