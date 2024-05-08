import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
  buttonType?: string;
  background?: string;
  textColor?: string;
  px?: number;
  py?: number;
  full?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      buttonType = "default",
      icon,
      background,
      textColor,
      px,
      py,
      disabled,
      onClick,
      full,
      ...rest
    },
    ref
  ) => {
    const typeHandler = () => {
      switch (buttonType) {
        case "primary":
          return `text-white bg-darkBlack ${disabled ? "cursor-not-allowed bg-grayMain text-[#666666]" : "cursor-pointer"} px-4 py-[13px]`;

        case "secondary":
          return `text-darkBlack ${disabled ? "cursor-not-allowed text-gray-500" : "cursor-pointer"} bg-white border border-grayMain px-4 py-3`;

        default:
          return `text-black ${background || ""} ${disabled && "opacity-50"} ${background ? "" : "border border-dashed border-grayMain"}`;
      }
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        style={{
          ...(buttonType !== "primary" &&
            buttonType !== "secondary" && {
              backgroundColor: background,
              color: textColor,
              padding: `${py}px ${px}px`,
            }),
        }}
        className={`rounded-lg ease-in-out transition-all ${full ? "w-full" : ""}  ${typeHandler()}`}
        {...rest}
      >
        <div className={`flex items-center justify-center gap-2`}>
          {icon && <span className="">{icon}</span>}
          <span className="text-sm font-normal leading-[16.94px]">{label}</span>
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";
