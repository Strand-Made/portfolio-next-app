import BlobTop from "../patterns/BlobTop";
const AboutContent = () => {
  return (
    <>
      <h2 className="text-3xl font-sans text-center mb-2 ">👋Hi! I am Stian</h2>
      <div className="relative flex justify-center">
        <BlobTop className="hidden md:inline-block mix-blend-soft-light opacity-10 absolute z-0 transform -translate-y-40 translate-x-52 lg:translate-x-full w-full max-w-2xl" />
        <BlobTop className="hidden md:inline-block mix-blend-soft-light opacity-10 absolute z-0 transform rotate-180 -translate-y-60 -translate-x-72 lg:-translate-x-full w-9/12 max-w-2xl" />
        <p className="max-w-prose lg:text-lg font-normal">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
    </>
  );
};

export default AboutContent;
