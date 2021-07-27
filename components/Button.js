import Link from "next/link";
const Button = ({ variant, text, href, icon }) => {
  if (variant === "primary") {
    return (
      <Link href={href}>
        <a
          className="block transition-colors duration-300 ease-linear bg-pink-cta text-pink-white font-body text-base
      text-center w-28 px-2 shadow-md py-1 rounded-full hover:bg-indigo-3 focus:bg-indigo-3 focus:shadow hover:shadow"
        >
          {text}
        </a>
      </Link>
    );
  }
  if (variant === "outlined") {
    return (
      <Link href={href}>
        <a
          className="block transition-colors duration-300 ease-linear font-body text-center w-20 
      mx-2 border rounded-full py-1 hover:bg-gray-1 hover:text-gray-4"
        >
          {text}
        </a>
      </Link>
    );
  }
  if (variant === "outlined-gray") {
    return (
      <Link href={href}>
        <a
          className="flex transition-colors duration-300 ease-linear items-center justify-center font-body text-center w-20 
      mx-2 border border-gray-3 rounded-full py-1 hover:bg-gray-3 hover:text-gray-1"
        >
          <p>{text}</p>
          <div className="ml-2">{icon}</div>
        </a>
      </Link>
    );
  }
  if (variant === "secondary") {
    return (
      <Link href={href}>
        <a className="flex flex-col justify-evenly items-center transition-colors duration-300 ease-linear bg-gray-4 hover:bg-gray-5 rounded-full text-gray-1 text-base shadow-md my-3 mx-1 w-36 py-4">
          {text}
        </a>
      </Link>
    );
  }
  return console.log("Please use a correct button variant");
};

export default Button;
