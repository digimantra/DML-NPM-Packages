import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillCamera } from "react-icons/ai";

export const Avatar = ({
  image,
  size,
  type,
  outline,
  color,
  onUpload,
  borderColor,
}) => {
  const [selectedImage, setSelectedImage] = useState(image);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData = reader.result;
      setSelectedImage(imageData);

      // Call the callback function with the image data
      onUpload(imageData);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
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
        className={`${sizeHandler()} hover:text-red-400 rounded-full overflow-hidden`}
      >
        {selectedImage || image ? (
          <img
            className={`h-full w-full object-cover `}
            src={selectedImage}
            alt="Face"
          />
        ) : type === "fill" ? (
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
                fill={color}
              />
              <path
                d="M12.5 10.9375C12.5 12.4906 12.5 13.75 7.5 13.75C2.5 13.75 2.5 12.4906 2.5 10.9375C2.5 9.38438 4.73875 8.125 7.5 8.125C10.2613 8.125 12.5 9.38438 12.5 10.9375Z"
                fill={color}
              />
            </g>
            <defs>
              <clipPath id="clip0_662_4489">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
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
                stroke={outline}
              />
              <path
                d="M12.5 10.9375C12.5 12.4906 12.5 13.75 7.5 13.75C2.5 13.75 2.5 12.4906 2.5 10.9375C2.5 9.38438 4.73875 8.125 7.5 8.125C10.2613 8.125 12.5 9.38438 12.5 10.9375Z"
                stroke={outline}
              />
            </g>
            <defs>
              <clipPath id="clip0_662_4483">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}

        <label className=" text-[10px] bg-blue-500 p-1 rounded-full  absolute text-white z-999 -bottom-1 -right-1">
          <AiFillCamera className="" />
          <input
            type="file"
            accept="image/*"
            className="cursor-pointer hidden"
            onChange={handleImageChange}
            id="avatarInput"
          />
        </label>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  image: PropTypes.string,
  borderColor: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  outline: PropTypes.string,
  color: PropTypes.string,
  onUpload: PropTypes.image,
};

Avatar.defaultProps = {
  outline: "#000000",
  color: "#cb4d2e",
};
