import BlobCenter from "../patterns/BlobCenter";

const AboutContent = () => {
  return (
    <>
      <h2 className="text-3xl font-sans text-center mb-2 ">👋Hi! I am Stian</h2>
      <div className="relative flex justify-center">
        <BlobCenter className="hidden md:inline-block mix-blend-soft-light opacity-10 absolute z-0 transform -translate-y-40 translate-x-52 lg:translate-x-full " />
        <BlobCenter className="hidden md:inline-block mix-blend-soft-light opacity-10 absolute z-0 transform rotate-180 -translate-y-60 -translate-x-72 lg:-translate-x-full " />

        <p className="max-w-prose lg:text-lg">
          I am a frontend developer who loves good user experiences. I have a
          good grasp of technologies such as Javascript(ES6+), React, DOM, JSON,
          HTML5 & CSS3. Finding good user experiences and solving problems is
          something I find interesting and enjoy bringing new ideas to life.
        </p>
      </div>
    </>
  );
};

export default AboutContent;
