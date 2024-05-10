import React, { useRef } from "react";

interface OtpFieldProps {
  hint: string;
  label: string;
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}

export const OtpField: React.FC<OtpFieldProps> = ({
  hint,
  label,
  otp,
  setOtp,
}) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  console.log(otp);

  const handleChange = (e: any, index: any) => {
    if (isNaN(parseInt(e.target.value))) return;

    setOtp([...otp.map((data, i) => (index === i ? e.target.value : data))]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    } else if (!e.target.value && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.clipboardData.getData("text");
    const pastedValues = value
      .split("")
      .filter((char) => !isNaN(parseInt(char)));
    const newOtp = pastedValues.slice(0, otp.length);
    setOtp(newOtp);
  };

  const handleKeyDown = (e: any, index: any) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="">
      {label && (
        <div className="text-[#344054] font-medium text-sm mb-1">{label}</div>
      )}
      <div className="flex items-center justify-between gap-4">
        {otp.map((data, i) => (
          <input
            key={i}
            className="flex text-center border border-[#D0D5DD] h-16 w-16 rounded-md outline-none p-2 text-6xl focus:border-red-800"
            style={{ color: "#D0D5DD", fontSize: "48px", lineHeight: "60px" }}
            type="text"
            value={data}
            maxLength={1}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={(e) => handlePaste(e)}
          />
        ))}
      </div>

      {hint && (
        <div className="font-normal text-sm leading-5 text-[#667085] mt-1">
          {hint}
        </div>
      )}
    </div>
  );
};
