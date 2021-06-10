import NavLink from "./NavLink";
import Button from "../Button";
import { FiGithub } from "react-icons/fi";

const MobileMenu = ({ open }) => {
  const styles = {
    mobileMenuStyle:
      "flex flex-col items-center space-y-5 transition-all  ease-in-out duration-700 bg-indigo-1 text-center absolute h-screen left-0 right-0 top-0 py-10 z-40 transform",
  };
  return (
    <ul
      className={`${styles.mobileMenuStyle} ${
        open ? "translate-x-0" : "translate-x-full "
      } `}
    >
      <NavLink
        href="https://github.com/Strand-made"
        text="Github"
        icon={<FiGithub className="text-xl text-current" />}
      />

      <li className="text-gray-1">
        <Button href="/contact" variant="primary" text="Contact me" />
      </li>
    </ul>
  );
};

export default MobileMenu;
