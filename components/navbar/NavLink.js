import Link from "next/link";

const NavLink = ({ href, text, icon, textDark }) => {
  const navLinkStyle = `font-body flex py-1 px-3 rounded-2xl hover:bg-indigo-3 focus:bg-indigo-3 transition-color duration-300 ease-in-out ${
    textDark ? "text-gray-3 hover:text-gray-1 focus:text-gray-1" : "text-gray-1"
  }`;
  return (
    <li>
      <Link href={href}>
        <a className={navLinkStyle}>
          {text} {icon}
        </a>
      </Link>
    </li>
  );
};

export default NavLink;
