import React from "react";
import Image from "next/image";
interface AvatarProp {
  src: string;
  alt: string;
  size: number;
}

const Avatar = ({ src, alt, size = 50 }: AvatarProp) => {
  return (
    <div>
      <Image
        width={size}
        height={size}
        src={src}
        alt={alt}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
};

export default Avatar;
