import React from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

/**
 * Avatar component for user profile images, supporting size variations.
 *
 * @param src - The URL of the avatar image.
 * @param alt - Alternative text for the avatar image.
 * @param size - The size of the avatar: 'sm' | 'md' | 'lg'.
 */
const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  size = "md",
}: AvatarProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${sizeMap[size]}`}
    />
  );
};

Avatar.displayName = "Avatar";

export default Avatar;
