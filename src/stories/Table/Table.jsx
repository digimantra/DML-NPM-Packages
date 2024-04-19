import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Table = ({ titles = [], rows}) => {
  const [currentPage, setCurrentPage]= useState(1);
  const [totalPages, setTotalPages]= useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [itemsPerPage, setItemsPerPage]= useState(6)

  useEffect(() => {
    // Calculate total number of pages
    const totalPagesCount = Math.ceil(rows.length / itemsPerPage);
    setTotalPages(totalPagesCount);

    // Update currentData based on currentPage and itemsPerPage
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(rows.slice(startIndex, endIndex));
  }, [rows, currentPage, itemsPerPage]);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const numbers = Array.from({ length: 20}, (_, index) => index + 1);

  return (
    <div className="relative md:pb-20 pb-16 mx-6 my-8 h-full border-2 border-red-100">
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-zinc-50 sticky reuseable-table-header">
                <tr>
                  {titles?.map((title) => (
                    <th
                      key={title?.id}
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 capitalize tracking-wider"
                    >
                      {title?.render ? title?.render() :title?.name}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table body */}
              <tbody className="bg-white divide-y divide-gray-200 max-h-60">
                {currentData?.map((el)=>(
                  <tr key={el?.key} className="bg-white border-b text-xs dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                    {Object.values(el).slice(1).map((val)=>(
                      <td className="py-4 text-left pl-4 pr-2 min-w-24" key={val}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>     
      {/* pagination buttons */}
      <div className="absolute bottom-4 right-0 w-1/2 flex items-center justify-around">

        <div className="flex items-center gap-2">

          <div className="text-xs">Items per Page:</div>
          <select className="outline-none text-xs border-b border-gray-300" onChange={(e)=>setItemsPerPage(Number(e.target.value))}>
          {numbers.map((number) => (
            <option className="" key={number} value={number}>{number}</option>
          ))}
        </select>


        </div>
        
        <div className="flex items-center gap-4">
        <button className="text-xs" onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>
          <button className="text-xs" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>prev</button>
          <span className="text-xs">{((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, rows.length)} of {rows.length}</span>
          <button className="text-xs" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
          <button className="text-xs" onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>Last</button>
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  titles: PropTypes.array,
  rows: PropTypes.array,
  itemsPerPage: PropTypes.number, // Change PropTypes.string to PropTypes.number
};
0.