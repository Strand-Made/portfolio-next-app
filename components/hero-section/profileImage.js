import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="flex w-max-content bg-gray-3 rounded-full">
      <div className="flex align-center">
        <Image
          src="/profile-img.png"
          alt="avatar of myself smiling"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
