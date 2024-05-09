import React from "react";
import { Icons } from "../icons/icons";

export const DatePicker: React.FC = () => {
  return (
    <div className="h-96 w-96 bg-white shadow-lg border border-gray-200 rounded-md">
      {/* select month/Year */}
      <div className="flex items-center justify-between">
        {/* month */}
        <div className="flex items-center justify-between py-4 w-40 h-12">
          <Icons name="leftArrow" height="12" width="12" fill="#666666" />
          <div className="flex items-center justify-between">
            <div className="font-medium text-sm text-center leading-5 capitalize text-[#49454F]">
              sep
            </div>
            <Icons name="arrowDown" height="12" width="12" fill="#666666" />
          </div>

          <Icons name="rightArrow" height="12" width="12" fill="#666666" />
        </div>

        {/* year */}
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

      {/* Select days */}
      <div>calander</div>
    </div>
  );
};
