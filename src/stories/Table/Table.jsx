import PropTypes from "prop-types";

export const Table = ({ titles = [], rows}) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto lg:-mx-6">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className=" overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-zinc-50 reuseable-table-header">
                <tr>
                  {titles?.map((title) => (
                    <th
                      key={title?.key}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-semibold text-zinc-500 capitalize tracking-wider"
                    >
                      {title?.name}
                    </th>
                  ))}

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rows?.map((el)=>(
                  <tr key={el?.key} className="bg-white border-b text-xs dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                  {Object.values(el).slice(1).map((val)=>(
                    <td className="py-4 text-left pl-6 pr-4" key={val}>{val}</td>


                  )) }
             </tr>

                ))}
              
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
  rows: PropTypes.array,
  children: PropTypes.element,
};


