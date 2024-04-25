import React from "react";
import PropTypes from "prop-types";

export const Button = React.forwardRef(
  (
    {
      label,
      type,
      icon,
      background,
      textColor,
      px,
      py,
      disabled,
      onClick,
      full,
    },
    ref
  ) => {
    const typeHandler = () => {
      switch (type) {

        case "primary":
          return `text-white bg-darkBlack ${disabled ? "cursor-not-allowed bg-grayMain text-[#666666]" : "cursor-pointer"} px-4 py-[13px]`;

        case "secondary":
          return `text-darkBlack ${disabled ? "cursor-not-allowed text-gray-500" : "cursor-pointer"} bg-white border border-grayMain px-4 py-3`;

        default:
          return  `text-black ${background} ${disabled && "opacity-50"} ${background ?"" :"border border-dashed border-grayMain"}`;
      }
    };

    return (
      <button
        ref={ref}
        disabled={disabled ? true : false}
        onClick={onClick}
        style={{
          ...((type !== "primary" && type !== "secondary") && {
            backgroundColor: background,
            color: textColor,
            padding: `${py}px ${px}px`,
          })
        }}
        className={`rounded-lg ease-in-out transition-all ${full ? "w-full" : ""}  ${typeHandler()}`}
      >
        <div className={`flex items-center justify-center gap-2`}>
          {icon && <span className="">{icon}</span>}
          <span className="text-sm font-normal leading-[16.94px]">{label}</span>
        </div>
      </button>
    );
  }
);

Button.propTypes = {
  background: PropTypes.string,
  textColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  type: PropTypes.oneOf(["default", "primary", "secondary"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  px: PropTypes.string,
  py: PropTypes.string,
  full: PropTypes.bool,
};

Button.defaultProps = {
  py: "12",
  px: "8",
  type: "default",
  label: "Button",
  disabled: false,
  onClick: undefined,
  background: null,
};

Button.displayName = "Button";
