import React from "react";

export interface CheckboxProps {
  id: string;
  name: string;
  disabled?: boolean;
  type: string;
  sideLabel: string;
  value: string;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  disabled = false,
  value,
  sideLabel,
}) => {
  return (
    <div className="flex items-center gap-2">
      <label className="relative flex cursor-pointer items-center p-1 rounded-md">
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          className="sr-only peer"
        />

        <div className="relative w-5 h-5 border border-black peer:absolute peer-focus:border-red-600 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-md peer dark:bg-gray-700 peer-checked:border-none  peer-checked:bg-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
            stroke="white"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </label>

      {sideLabel && (
        <div className="block mt-2 font-medium leading-5  capitalize text-[#344054] text-xs tracking-wider mb-2">
          {sideLabel}
        </div>
      )}
    </div>
  );
};
