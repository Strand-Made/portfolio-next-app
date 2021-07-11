import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="flex w-auto bg-gray-3 rounded-full">
      <div className="flex w-full justify-center align-center relative">
        <Image
          className=" object-scale-down transform translate-x-2.5 translate-y-3.5"
          src="/profile-img.png"
          alt="avatar of myself smiling"
          width={300}
          height={300}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
