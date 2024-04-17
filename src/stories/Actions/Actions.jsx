import PropTypes from "prop-types";

export const Actions = ({ show, setShow, list }) => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setShow(!show)}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
        >
          Options
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
      </div>

      {show && (
        <div
          className={`absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          {list?.map((item, index) => (
            <div
              key={index}
              className={`p-2 font-normal text-sm leading-4 cursor-pointer hover:bg-[#fef8f8] capitalize tracking-wide`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Actions.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  list: PropTypes.array,
};

Actions.defaultProps = {
  show: false,
  setShow: false,
  list: ["edit", "view", "delete"],
};
