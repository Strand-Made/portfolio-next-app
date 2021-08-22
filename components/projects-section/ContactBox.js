import { IoMdInformationCircle } from "react-icons/io";
import Link from "next/link";

const ContactBox = () => {
  return (
    <div className="flex items-center bg-indigo-3 rounded-xl mx-auto max-w-xl p-2">
      <div className="mr-2">
        <IoMdInformationCircle className="text-4xl" />
      </div>
      <p className="max-w-prose">
        You are free to {""}
        <Link href="/contact">
          <a className="text-indigo-4 font-bold hover:underline focus:underline">
            contact me
          </a>
        </Link>{" "}
        to see more projects, or you can check out my&nbsp;
        <Link href="https://github.com/Strand-Made/">
          <a className="text-indigo-4 font-bold hover:underline focus:underline">
            github
          </a>
        </Link>
      </p>
    </div>
  );
};

export default ContactBox;
