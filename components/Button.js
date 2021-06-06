import Link from "next/link";
const Button = ({ variant, text, href }) => {
  if (variant === "primary") {
    return (
      <Link href={href}>
        <a
          className="block bg-pink-cta text-pink-white font-body text-base 
      text-center w-24 shadow-md py-1 rounded-full hover:bg-indigo-3 focus:bg-indigo-3 focus:shadow hover:shadow"
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
          className="block self-start font-body text-center w-20 
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
          className="block self-start font-body text-center w-20 
      mx-2 border border-gray-3 rounded-full py-1 hover:bg-gray-3 hover:text-gray-1"
        >
          {text}
        </a>
      </Link>
    );
  }
  return console.log("Please use a correct variant");
};

export default Button;
