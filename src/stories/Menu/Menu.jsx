import { useState } from "react";
import "./Menu.css";

export const Menu = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="shadow-md p-4 rounded-md flex flex-col items-center justify-center border-gray-200 border gap-2">
      <div className="">
        <div onClick={()=> setShow(!show)} className="cursor-pointer text-xs capitalize text-blue-500 border-b border-gray-300">
          Fruits
        </div>

        {show && (
          <ul className="text-xs capitalize">
            <li>apple</li>
            <li>apple</li>
            <li>apple</li>
            <li>apple</li>
          </ul>
        )}
      </div>

      <div className="cursor-pointer text-xs capitalize text-blue-500 border-b border-gray-300">
          Fruits
        </div>


    </div>
  );
};
