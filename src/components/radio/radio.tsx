import React from "react";

export interface RadioProps {
  sideLabel: string;
  value: string;
  name: string;
  id: string;
  disabled: boolean;
  checkedValue: string;
  onChange: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({
  sideLabel,
  value,
  name,
  id,
  disabled,
  onChange,
}) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <div className="flex items-center gap-2">
      <label className="inline-flex items-center cursor-pointer">
        <input
          id={id}
          name={name}
          disabled={disabled ? true : false}
          type="radio"
          value={value}
          onChange={handleChange}
          className="sr-only peer"
        />
        <div
          className={`relative w-4 h-4 border peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:border-none peer-checked:bg-red-600 peer-checked:after:bg-white peer-checked:after:border-white peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:top-[5px] peer-checked:after:left-[5px] after:border-gray-300 peer-checked:after:border after:rounded-full peer-checked:after:h-1.5 peer-checked:after:w-1.5 ${disabled ? "border-gray-400" : "border-black"}`}
        ></div>
      </label>

      {sideLabel && (
        <div
          className={`block mt-2 font-medium leading-5  capitalize text-[#344054] text-xs tracking-wider mb-2 ${disabled && "text-gray-400"}`}
        >
          {sideLabel}
        </div>
      )}
    </div>
  );
};
