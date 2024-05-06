import React, { ChangeEvent, useState } from "react";

interface AvatarProps {
  image?: string;
  borderColor?: string;
  size?: string;
  type?: string;
  outline?: string;
  color?: string;
  onUpload?: (imageData: string) => void;
}

export const Avatar: React.FC<AvatarProps> = ({
  image,
  size,
  type,
  outline,
  color,
  onUpload,
  borderColor,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(image);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result as string;
      setSelectedImage(imageData);

      // Call the callback function with the image data
      onUpload?.(imageData);
    };

    reader.readAsDataURL(file);
  };

  const sizeHandler = () => {
    switch (size) {
      case "1":
        return "h-2 w-2";
      case "2":
        return "h-4 w-4";
      case "3":
        return "h-6 w-6";
      case "4":
        return "h-8 w-8";
      case "5":
        return "h-10 w-10";
      case "6":
        return "h-12 w-12";
      case "7":
        return "h-14 w-14";
      case "8":
        return "h-16 w-16";
      default:
        return "h-10 w-10";
    }
  };

  return (
    <div className="relative">
      <div
        style={{
          border: `1px solid ${selectedImage ? borderColor || "blue" : "transparent"}`,
        }}
        className={`${sizeHandler()} cursor-pointer hover:text-red-400 rounded-full overflow-hidden`}
      >
        {selectedImage || image ? (
          <label htmlFor="avatarInput" className="cursor-pointer">
            <img
              className={`h-full w-full object-cover`}
              src={selectedImage || image}
              alt="Face"
            />
          </label>
        ) : type === "fill" ? (
          <label htmlFor="avatarInput" className="cursor-pointer">
            <svg
              className="h-full w-full"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_662_4489)">
                <path
                  d="M7.5 6.25C8.88071 6.25 10 5.13071 10 3.75C10 2.36929 8.88071 1.25 7.5 1.25C6.11929 1.25 5 2.36929 5 3.75C5 5.13071 6.11929 6.25 7.5 6.25Z"
                  fill={color || "#cb4d2e"}
                />
                <path
                  d="M12.5 10.9375C12.5 12.4906 12.5 13.75 7.5 13.75C2.5 13.75 2.5 12.4906 2.5 10.9375C2.5 9.38438 4.73875 8.125 7.5 8.125C10.2613 8.125 12.5 9.38438 12.5 10.9375Z"
                  fill={color || "#cb4d2e"}
                />
              </g>
              <defs>
                <clipPath id="clip0_662_4489">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </label>
        ) : (
          <label htmlFor="avatarInput" className="cursor-pointer">
            <svg
              className="h-full w-full"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_662_4483)">
                <path
                  d="M7.5 6.25C8.88071 6.25 10 5.13071 10 3.75C10 2.36929 8.88071 1.25 7.5 1.25C6.11929 1.25 5 2.36929 5 3.75C5 5.13071 6.11929 6.25 7.5 6.25Z"
                  stroke={outline || "#000000"}
                />
                <path
                  d="M12.5 10.9375C12.5 12.4906 12.5 13.75 7.5 13.75C2.5 13.75 2.5 12.4906 2.5 10.9375C2.5 9.38438 4.73875 8.125 7.5 8.125C10.2613 8.125 12.5 9.38438 12.5 10.9375Z"
                  stroke={outline || "#000000"}
                />
              </g>
              <defs>
                <clipPath id="clip0_662_4483">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </label>
        )}

        <input
          type="file"
          accept="image/*"
          className="cursor-pointer hidden"
          onChange={handleImageChange}
          id="avatarInput"
        />
      </div>
    </div>
  );
};

Avatar.defaultProps = {
  outline: "#000000",
  color: "#cb4d2e",
  onUpload: () => {},
};
