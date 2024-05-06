import React from "react";
import { IconsData } from "./iconData";

interface IconsProps {
  name: string;
  width?: string;
  filled?: boolean;
  height?: string;
  fill?: string;
  onClick?: () => void;
}

export const Icons: React.FC<IconsProps> = ({
  name,
  width = "15",
  filled,
  height = "15",
  fill,
  onClick,
}) => {
  const icon = IconsData[name];

  if (!icon) {
    return null;
  }
  return (
    <div onClick={onClick}>
      {icon?.stroke === true ? (
        <svg
          width={width}
          height={height}
          viewBox={icon?.view ? icon?.view : "0 0 15 15"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={filled ? icon?.filled?.d1 : icon?.outline?.d1}
            fill={filled ? fill : ""}
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={filled ? icon?.filled?.d2 : icon?.outline?.d2}
            fill={fill}
          />
        </svg>
      ) : (
        <svg
          fillRule="evenodd"
          clipRule="evenodd"
          width={width}
          height={height}
          viewBox={icon?.view ? icon?.view : "0 0 15 15"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={filled ? icon?.filled?.d1 : icon?.outline?.d1}
            fill={fill}
          />

          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={filled ? icon?.filled?.d2 : icon?.outline?.d2}
            fill={fill}
          />
        </svg>
      )}
    </div>
  );
};

// Icons.propTypes = {
//   name: PropTypes.string.isRequired,
//   width: PropTypes.string,
//   height: PropTypes.string,
//   fill: PropTypes.string,
//   filled: PropTypes.bool,
//   onClick: PropTypes.func,
// };
