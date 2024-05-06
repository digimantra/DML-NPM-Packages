import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

interface Option {
  id: string;
  value: string;
  name: string;
}

interface Props {
  name?: string;
  label?: string;
  sideLabel?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  type?:
    | "textarea"
    | "radio"
    | "checkbox"
    | "text"
    | "email"
    | "password"
    | "number";
  icon?: React.ReactNode;
  hint?: string;
  value?: string | boolean;
  selectList?: Option[];
  id?: string;
}

export const InputField = forwardRef<HTMLDivElement, Props>(
  (
    {
      label,
      sideLabel,
      type = "text",
      placeholder = "enter the value",
      disabled = false,
      icon,
      id,
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

        case "radio":
          return `default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`;

        case "checkbox":
          return `w-4 h-4 accent-[#e11d07] bg-gray-100 border-red-300 rounded-lg`;

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
          isNaN(inputValue as number) ||
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

    useImperativeHandle(ref, () => ({
      validate: () => {
        const isValid = handleValidation();

        return isValid; // Return the validation status
      },
    }));

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue =
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value;
      setInputValue(inputValue);
      if (onChange) {
        onChange(inputValue);
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
        ) : type === "checkbox" ? (
          <div className="flex items-center gap-2">
            <label className="inline-flex items-center cursor-pointer">
              <input
                disabled={disabled}
                id={id}
                type={type}
                name={name}
                checked={value as boolean}
                onChange={handleChecked}
                className="sr-only peer"
              />

              <div
                className="relative w-4 h-4 border border-black peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-md peer dark:bg-gray-700 peer-checked:border-none  peer-checked:bg-red-600 
              peer-checked:after:absolute 
              peer-checked:after:content-['\2713'] 
              peer-checked:after:text-white 
              peer-checked:after:text-base 
              peer-checked:after:-top-[4px] peer-checked:after:left-[1px] "
              ></div>
            </label>

            {sideLabel && (
              <div className="block mt-2 font-medium leading-5  capitalize text-[#344054] text-xs tracking-wider mb-2">
                {sideLabel}
              </div>
            )}
          </div>
        ) : type === "radio" ? (
          <div className="flex items-center gap-2">
            <label className="inline-flex items-center cursor-pointer">
              <input
                id={id}
                name={name}
                disabled={disabled}
                type={type}
                value={value as string}
                className="sr-only peer"
              />
              <div className="relative w-4 h-4 border border-black peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:border-none  peer-checked:bg-red-600 peer-checked:after:bg-white peer-checked:after:border-white peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:top-[5px] peer-checked:after:left-[5px] after:border-gray-300 peer-checked:after:border after:rounded-full peer-checked:after:h-1.5 peer-checked:after:w-1.5"></div>
            </label>

            {sideLabel && (
              <div className="block mt-2 font-medium leading-5  capitalize text-[#344054] text-xs tracking-wider mb-2">
                {sideLabel}
              </div>
            )}
          </div>
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
