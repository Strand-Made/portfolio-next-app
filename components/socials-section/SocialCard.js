import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

const SocialCard = ({ children, heading }) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const transition = { duration: 0.5, ease: "easeInOut" };
  const cardDisplayVariants = {
    enter: { opacity: 1, x: 0, transition },
    leave: { opacity: 0.5, x: 50, transition },
  };
  useEffect(() => {
    if (inView) {
      controls.start("enter");
    }
    if (!inView) {
      controls.set("leave");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={cardDisplayVariants}
      className="text-indigo-1 rounded-lg mt-3 px-5 py-3 relative"
    >
      {heading}
      <div className="flex flex-row justify-evenly space-x-3 items-center h-32">
        {children}
      </div>
    </motion.div>
  );
};

export default SocialCard;
