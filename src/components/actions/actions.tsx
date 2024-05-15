import React from "react";

interface Action {
  id: number;
  name: string;
  action: () => void;
}

interface ActionsProps {
  show?: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
  list?: Action[];
  customButton?: React.ReactNode;
  position?: "left" | "right" | "topCenter" | "topLeft" | "topRight" | "center";
}

export const Actions: React.FC<ActionsProps> = ({
  show = false,
  setShow = () => {},
  list = [
    {
      id: 1,
      name: "view",
      action: () => {
        console.log("see the list");
      },
    },
    {
      id: 2,
      name: "delete",
      action: () => {
        console.log("deleted");
      },
    },
    {
      id: 3,
      name: "edit",
      action: () => {
        console.log("Edited");
      },
    },
  ],
  customButton = (
    <button
      type="button"
      className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      id="menu-button"
    >
      Action
      <svg
        className="-mr-1 h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  ),
  position = "left",
}) => {
  const handleItemClick = (action: () => void) => {
    action();
    setShow(false);
  };

  const handlePosition = () => {
    switch (position) {
      case "left":
        return "right-0";
      case "right":
        return "left-0";
      case "topCenter":
        return "bottom-full mb-2 left-1/2 transform -translate-x-1/2";
      case "topLeft":
        return "bottom-full mb-2 right-0";
      case "topRight":
        return "bottom-full mb-2 left-0";
      case "center":
        return "left-1/2 transform -translate-x-1/2";
      default:
        return "left-0";
    }
  };

  return (
    <div className="relative font-sans inline-block text-left">
      <div
        onClick={() => setShow(!show)}
        className="cursor-pointer block w-fit"
      >
        {customButton}
      </div>

      {show && (
        <div
          className={`font-sans p-2 absolute ${handlePosition()} z-10 w-28 origin-top-right rounded-md bg-white shadow-md border border-gray-100`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {list?.map((item) => (
            <div
              key={item?.id}
              onClick={() => handleItemClick(item?.action)}
              className="p-2 font-normal text-sm leading-4 cursor-pointer mb-1 rounded-md hover:bg-[#fef8f8] text-[#343434] capitalize tracking-wide"
            >
              {item?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
