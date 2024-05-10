import React from "react";
import { Icons } from "../icons/icons";

export const DatePicker: React.FC = () => {
  return (
    <div className="bg-white shadow-lg container border border-gray-200 rounded-md">
      {/* select month/Year */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between py-4">
          <Icons name="leftArrow" height="12" width="12" fill="#666666" />
          <div className="flex items-center justify-between">
            <div className="font-medium text-sm text-center leading-5 capitalize text-[#49454F]">
              sep
            </div>
            <Icons name="arrowDown" height="12" width="12" fill="#666666" />
          </div>

          <Icons name="rightArrow" height="12" width="12" fill="#666666" />
        </div>

        <div className="flex items-center justify-between">
          <Icons name="leftArrow" height="12" width="12" fill="#666666" />
          <div className="flex items-center justify-between">
            <div className="font-medium text-sm text-center leading-5 capitalize text-[#49454F]">
              sep
            </div>
            <Icons name="arrowDown" height="12" width="12" fill="#666666" />
          </div>

          <Icons name="rightArrow" height="12" width="12" fill="#666666" />
        </div>
      </div>

      <input />
    </div>
  );
};
