import React from "react";
import NextImage from "next/image";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <NextImage
        src={src}
        alt={alt}
        width={width || 500}
        height={height || 500}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ResponsiveImage;
