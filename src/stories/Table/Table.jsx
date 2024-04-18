import PropTypes from "prop-types";

export const Table = ({ titles = [], children }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto lg:-mx-6">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className=" overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-zinc-50 reuseable-table-header">
                <tr>
                  {titles.map((title, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-semibold text-zinc-500 capitalize tracking-wider"
                    >
                      {title}
                    </th>
                  ))}

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {children}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  titles: PropTypes.array,
  children: PropTypes.element,
};

Table.Data = ({ children }) => (
  <tr className="bg-white border-b text-xs text-left dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    {children}
  </tr>
);

Table.Data.propTypes = {
  children: PropTypes.node,
};

Table.Data.displayName = "Table.Data";
