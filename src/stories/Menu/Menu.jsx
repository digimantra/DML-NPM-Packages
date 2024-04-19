import PropTypes from "prop-types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useState } from "react";

export const Menu = ({ show, setShow, menu }) => {
  const [dropdownState, setDropdownState] = useState({});

  // Function to toggle dropdown for a specific menu item
  const toggleDropdown = (id) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <nav className="bg-white fixed border-gray-200 top-6 left-8 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setShow(!show)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <div className="grid justify-items-center gap-1.5">
            <span
              className={`h-1 w-8 rounded-full bg-black transition-all ${
                show ? "rotate-45 translate-y-2.5 duration-200 ease-in-out" : ""
              }`}
            ></span>

            <span
              className={`h-1 w-8 rounded-full bg-black ${
                show ? "scale-0 ease-in-out" : ""
              }`}
            ></span>

            <span
              className={`h-1 w-8 rounded-full bg-black transition-all ${
                show ? "-rotate-45 -translate-y-2.5  duration-200 ease-in-out" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Main menu component */}
        <div
          className={`w-full md:block md:w-auto ${
            show ? "duration-200 ease-in-out transition-all" : "hidden duration-200 ease-in-out transition-all"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium w-96 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:justify-around md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menu?.map((item) => (
                <li
                  key={item?.id}
                  className={`px-4
                  }`}
                >
                  <div className={`relative flex z-10 items-center gap-2 mb-2 py-2 px-3 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 ${
                    dropdownState[item.id] ? "bg-blue-700 text-white" : "bg-gray-300 text-gray-800"
                  }`}>

                  {item?.icon}
                  <a
                    href="#"
                    className="block relative text-sm tracking-wide"
                    aria-current="page"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    {item?.heading}
                  </a>

                  <FaChevronDown
                    onClick={() => toggleDropdown(item.id)}
                    className={`${
                      dropdownState[item.id] ? "opacity-0 md:hidden duration-300 ease-in-out" : ""
                    } absolute md:hidden z-50 cursor-pointer right-3 top-1/2 transform-all -translate-y-1/2`}
                  />
                  <FaChevronUp
                    onClick={() => toggleDropdown(item.id)}
                    className={`absolute ${
                      dropdownState[item.id] ? "duration-300 ease-in-out" : "opacity-0 md:hidden duration-300 ease-in-out"
                    } cursor-pointer right-3 top-1/2 md:hidden transform -translate-y-1/2`}
                  />

                  </div>
                 


                <div
                  className={`${
                    dropdownState[item.id] ? "translate-y-0 opacity-100 transform-all duration-300 h-full py-2 mb-2 ease-in-out " : "-translate-y-full h-0 opacity-0 duration-300  transform-all ease-in-out "
                  } transform-all ease-in-out md:absolute md:top-10 w-full md:w-28 bg-gray-200 rounded-md  px-1`}
                >
                  <ul className="">
                    {item?.drop?.map((el, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 mb-2 py-2 text-gray-800 rounded md:bg-transparent md:p-0 capitalize dark:text-white md:dark:text-blue-500 hover:bg-gray-300 md:hover:bg-transparent"
                      >
                        <a href="#" className="block text-sm tracking-wide pl-6 md:pl-2 md:text-xs" aria-current="page">
                          {el}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                </li>

                
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Menu.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  menu: PropTypes.array,
};

Menu.defaultProps = {
  show: true, // Set default value for show prop
};
