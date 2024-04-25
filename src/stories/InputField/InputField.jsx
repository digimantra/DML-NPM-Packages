import PropTypes from "prop-types";
import { forwardRef, useImperativeHandle, useState } from "react";
// import { MdErrorOutline } from "react-icons/md";

export const InputField = forwardRef(
  (
    {
      label,
      sideLabel,
      type,
      placeholder,
      disabled,
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
    const [inputValue, setInputValue] = useState(value || "");
    const [errorMessage, setErrorMessage] = useState("");

    const classHandler = () => {
      switch (type) {
        case "textarea":
          return `appearance-none block w-full text-zinc-700 border border-grayMain rounded-lg py-2.5 ${icon ? "px-10" : "px-3.5"} shadow-sm text-base leading-6 font-normal focus:outline-none focus:border-[#d6bbfb] focus:shadow-md focus:shadow-[#f4ebff] disabled:bg-[#f9fafb] disabled:shadow-sm ${errorMessage && `shadow-md shadow-[#fda29b]`}`;

        case "radio":
          return `default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`;

        case "checkbox":
          return `w-4 h-4 accent-[#e11d07] bg-gray-100 border-red-300 rounded-sm`;

        default:
          return `appearance-none block w-full text-zinc-700 border border-grayMain rounded-lg py-2.5 ${icon ? "px-10" : "px-3.5"} ${type === "number" && "pl-16"} shadow-sm text-base leading-6 font-normal focus:outline-none focus:border-[#d6bbfb] focus:shadow-md focus:shadow-[#f4ebff] disabled:bg-[#f9fafb] disabled:shadow-sm ${errorMessage && `shadow-md shadow-[#fda29b]`}`;
      }
    };

    const handleChange = (event) => {
      const inputValue = event.target.value;
      setInputValue(inputValue);
      if (onChange) {
        onChange(inputValue);
      }
    };  

    const handleValidation = () => {
      if (type === "email") {
        const isValidEmail = /\S+@\S+\.\S+/.test(inputValue);
        if (!isValidEmail) {
          setErrorMessage("Enter a valid email address.");
        } else {
          setErrorMessage("");
          return true;
        }
      } else if (type === "password") {
        if (inputValue.length < 8) {
          setErrorMessage("Password must be at least 8 characters long.");
        }

        const hasSpecialCharacter =
          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(inputValue);
        if (!hasSpecialCharacter) {
          setErrorMessage(
            "Password must include at least one special character."
          );
          return;
        }
        setErrorMessage("");
        return true;
      } else if (type === "number") {
        if (isNaN(inputValue) || !inputValue || inputValue.length < 10) {
          setErrorMessage("Please enter a valid number.");
        } else {
          setErrorMessage("");
          return true;
        }
      }
    };

    const handleKeyPress = (event) => {
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

    return (
      <div ref={ref} className={`relative w-full md:w-full my-4`}>
        {label && (
          <label className="block font-medium leading-5  capitalize tracking-wide text-[#344054] text-sm mb-2">
            {label}
          </label>
        )}

        {icon && (
          <div
            className={`absolute z-10 ${label ? "top-[40px]" : "top-[12px]"} left-3 text-[22px] text-gray-400`}
          >
            {icon}
          </div>
        )}

        {type === "textarea" ? (
          <textarea
            disabled={disabled ? true : false}
            type={type}
            name={name}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className={`${classHandler()}`}
            placeholder={placeholder || "Enter text"}
          />
        ) : type === "checkbox" ? (
          <div className="flex items-center gap-2">
            <input
              disabled={disabled ? true : false}
              id={id}
              type={type}
              name={name}
              checked={value}
              onChange={handleChange}
              className={classHandler()}
            />

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
                disabled={disabled ? true : false}
                type={type}
                value={value}
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
            disabled={disabled ? true : false}
            type={type}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className={classHandler()}
            placeholder={placeholder || "Enter email"}
          />
        )}

        {/* Type number Input */}
        {type === "number" &&
          (selectList ? (
            <select onSelect={value} className="absolute top-10 left-2 outline-none text-[#101828] text-base">
              {selectList.map((el, index) => (
                <option value={el} className="text-sm" key={index}>
                  {el}
                </option>
              ))}
            </select>
          ) : (
            <select onSelect={value} className="absolute top-10 left-2 outline-none text-[#101828] text-base">
            <option value="us">US</option> {/* United States */}
            <option value="uk">UK</option> {/* United Kingdom */}
            <option value="in">IN</option> {/* India */}
            <option value="rus">RUS</option> {/* Russia */}
          </select>
          ))}

        {/* Hint */}
        {hint && (
          <div className="text-sm mt-1 font-normal text-[#667085]">{hint}</div>
        )}

        {/* validation Error */}
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

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  sideLabel: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.element,
  hint: PropTypes.string,
  value: PropTypes.any,
  selectList: PropTypes.array,
  id: PropTypes.string,
};

InputField.defaultProps = {
  label: "",
  onChange: undefined,
  placeholder: "enter value",
  type: "",
};

InputField.displayName = "InputField";
