import PropTypes from "prop-types";
import { IconsData } from "./IconsData";

export const Icons = ({ name, width, filled, height, fill }) => {
  const icon = IconsData[name];

  if (!icon) {
    return null;
  }

  return (
    <div>
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

Icons.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  filled: PropTypes.bool,
};
