import Image from "next/image";

function ProfileImage() {
  return (
    <div className="flex w-max-content bg-gray-3 rounded-full">
      <div>
        <Image
          src="/profile-img.png"
          alt="avatar of myself smiling"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default ProfileImage;
