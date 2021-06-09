import ProfileImage from "./ProfileImage";
const HeroComponent = () => {
  return (
    <section className="w-full flex flex-col items-center ">
      <h1 className="text-4xl mb-3 lg:text-5xl font-sans max-w-sm lg:max-w-2xl text-indigo-3 font-bold text-center ">
        Frontend Developer & chill guy
      </h1>
      <ProfileImage />
    </section>
  );
};

export default HeroComponent;
