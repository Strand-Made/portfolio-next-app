import { HiMenu, HiX } from "react-icons/hi";

const Burger = ({ open, setOpen }) => {
  const handleClick = () => setOpen(!open);
  return (
    <button
      role="toggle mobilenav"
      className="absolute right-1 z-50 transition-colors duration-300 ease-in-out  focus:outline-none focus:bg-indigo-2 rounded-full "
      onClick={handleClick}
    >
      {open ? (
        <HiX className="text-4xl fill-current" aria-label="close nav" />
      ) : (
        <HiMenu className="text-4xl" aria-label="open nav" />
      )}
    </button>
  );
};

export default Burger;
