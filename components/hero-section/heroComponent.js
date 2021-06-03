import ProfileImage from "./ProfileImage";
const HeroComponent = () => {
  return (
    <section className="w-full flex flex-col items-center ">
      <h1 className="text-4xl max-w-sm text-indigo-3 font-bold text-center ">
        Frontend Developer & chill guy
      </h1>
      <ProfileImage />
    </section>
  );
};

export default HeroComponent;
