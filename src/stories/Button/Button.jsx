import React from "react";
import PropTypes from "prop-types";

export const Button = React.forwardRef(
  (
    {
      label,
      type,
      icon,
      backgroundColor,
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
        case "default":
          return `text-black ${backgroundColor} ${disabled && "opacity-50"} border border-dashed border-grayMain`;

        case "primary":
          return `text-white bg-darkBlack ${disabled ? "cursor-not-allowed bg-grayMain text-[#666666]" : "cursor-pointer"} px-4 py-[13px]`;

        case "secondary":
          return `text-darkBlack ${disabled ? "cursor-not-allowed text-buttonDisable" : "cursor-pointer"} bg-white border border-grayMain px-4 py-3`;

        default:
          break;
      }
    };

    return (
      <button
        ref={ref}
        disabled={disabled ? true : false}
        onClick={onClick}
        style={{
          backgroundColor: `${backgroundColor}`,
          color: `${textColor}`,
          padding: ` ${py}px ${px}px`,
        }}
        className={`rounded-xl  capitalize ease-in-out transition-all ${full ? "w-full" : ""}  ${typeHandler()}`}
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
  backgroundColor: PropTypes.string,
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
  py: "12px",
  px: "6px",
  type: "default",
  label: "Button",
  disabled: false,
  onClick: undefined,
  backgroundColor: null,
};

Button.displayName = "Button";
