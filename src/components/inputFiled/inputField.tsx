import React, { forwardRef, useEffect, useState } from "react";

interface Option {
  id: string;
  value: string;
  name: string;
}

interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  type?: "textarea" | "text" | "email" | "password" | "number";
  icon?: React.ReactNode;
  hint?: string;
  value?: string | boolean;
  selectList?: Option[];
}

export const InputField = forwardRef<HTMLDivElement, Props>(
  (
    {
      label,
      type = "text",
      placeholder = "enter the value",
      disabled = false,
      icon,
      value,
      hint,
      onChange,
      name,
      selectList,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState<string | boolean>(value || "");

    const [selectedOption, setSelectedOption] = useState<string>(
      selectList && selectList.length > 0 ? selectList[0].value : ""
    );
    const [errorMessage, setErrorMessage] = useState<string>("");

    // @ts-ignore
    const [combinedData, setCombinedData] = useState<{
      number: string | boolean;
      select: string;
    } | null>(null);

    const classHandler = () => {
      switch (type) {
        case "textarea":
          return `appearance-none block w-full text-zinc-700 border border-grayMain rounded-lg py-2.5 ${
            icon ? "px-10" : "px-3.5"
          } shadow-sm text-base leading-6 font-normal focus:outline-none focus:border-[#d6bbfb] focus:shadow-md focus:shadow-[#f4ebff] ${disabled && "bg-[#f9fafb] shadow-sm"} ${errorMessage && `shadow-md shadow-[#fda29b]`}`;

        default:
          return `appearance-none block w-full text-zinc-700 border border-grayMain rounded-lg py-2.5 ${
            icon ? "px-10" : "px-3.5"
          } ${selectList && "pl-16"} shadow-sm text-base leading-6 font-normal focus:outline-none focus:border-[#d6bbfb] focus:shadow-md focus:shadow-[#f4ebff]  ${disabled && "bg-[#f9fafb] shadow-sm"} ${errorMessage && `shadow-md shadow-[#fda29b]`}`;
      }
    };

    const handleChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const inputValue = event.target.value;
      setInputValue(inputValue);
      if (onChange) {
        onChange(inputValue);
      }
    };

    const handleSelectChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue); // Update selected value state
      if (onChange) {
        onChange(selectedValue); // Pass selected value to parent component
      }
    };

    const handleValidation = () => {
      if (type === "email") {
        const isValidEmail = /\S+@\S+\.\S+/.test(inputValue as string);
        if (!isValidEmail) {
          setErrorMessage("Enter a valid email address.");
        } else {
          setErrorMessage("");
          return true;
        }
      } else if (type === "password") {
        if ((inputValue as string).length < 8) {
          setErrorMessage("Password must be at least 8 characters long.");
        }

        const hasSpecialCharacter =
          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(inputValue as string);
        if (!hasSpecialCharacter) {
          setErrorMessage(
            "Password must include at least one special character."
          );
          return;
        }
        setErrorMessage("");
        return true;
      } else if (type === "number") {
        if (
          // @ts-ignore
          isNaN(inputValue === "number") ||
          !inputValue ||
          (inputValue as string).length < 10
        ) {
          setErrorMessage("Please enter a valid number.");
        } else {
          setErrorMessage("");
          return true;
        }
      } else if (type === "text") {
        if (!inputValue) {
          setErrorMessage("You cannot leave the text area empty.");
        } else {
          setErrorMessage("");
          return true;
        }
      }
    };

    useEffect(() => {
      if (selectList && type === "number" && inputValue && selectedOption) {
        setCombinedData({ number: inputValue, select: selectedOption });
      } else {
        setCombinedData(null);
      }
    }, [inputValue, selectedOption, selectList, type]);

    const handleKeyPress = (
      event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      if (event.key === "Enter") {
        handleValidation();
      }
    };

    return (
      <div ref={ref} className={`relative w-full md:w-full my-4`}>
        {label && (
          <label className="block font-medium leading-5  capitalize tracking-wide text-[#344054] text-sm mb-2">
            {label}
          </label>
        )}

        {icon && (
          <div
            className={`absolute z-10 ${label ? "top-[42px]" : "top-[12px]"} left-3.5 text-[22px] text-gray-400`}
          >
            {icon}
          </div>
        )}

        {type === "textarea" ? (
          <textarea
            disabled={disabled}
            name={name}
            value={inputValue as string}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className={classHandler()}
            placeholder={placeholder}
          />
        ) : (
          <input
            name={name}
            disabled={disabled}
            type={type}
            value={inputValue as string}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className={classHandler()}
            placeholder={placeholder}
          />
        )}

        {type === "number" && selectList && (
          <select
            value={selectedOption} // Set selected value
            onChange={handleSelectChange}
            className={`absolute top-[42px] left-2 outline-none bg-white text-[#101828] text-sm`}
          >
            {selectList.map((el) => (
              <option value={el?.value} className="text-sm" key={el?.id}>
                {el?.name}
              </option>
            ))}
          </select>
        )}

        {hint && (
          <div className="text-sm mt-1 font-normal text-[#667085]">{hint}</div>
        )}

        {errorMessage && (
          <>
            <div className="text-sm mt-1 font-normal text-[#F04438]">
              {errorMessage}
            </div>
            <div
              className={`absolute ${label ? "top-[42px] right-3" : "top-[15px] right-3"}`}
            >
              {/* <MdErrorOutline className="text-[#f04438]" /> */}
            </div>
          </>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
