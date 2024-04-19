import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Table = ({ titles = [], rows, itemsPerPage}) => {
const [currentPage, setCurrentPage]= useState(1);
const [totalPages, setTotalPages]= useState(1);
const [ currentData, setCurrentData] = useState([]);


useEffect(() => {
  // Calculate total number of pages
  const totalPagesCount = Math.ceil(rows.length / itemsPerPage);
  setTotalPages(totalPagesCount);

  // Update currentData based on currentPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  setCurrentData(rows.slice(startIndex, endIndex));
}, [rows, currentPage, itemsPerPage]);

const handlePageChange = (newPage) => {
  setCurrentPage(newPage);
};

  return (
    <div className="flex flex-col relative ">
      <div className="-my-2 overflow-x-auto lg:-mx-6 rounded-md border border-dashed border-blue-400">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className=" overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-zinc-50 reuseable-table-header">
                <tr>
                  {titles?.map((title) => (
                    <th
                      key={title?.id}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-semibold text-zinc-500 capitalize tracking-wider"
                    >
                      {title?.render ? title?.render() :title?.name}
                    </th>
                  ))}

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentData?.map((el)=>(
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

           <div className="fixed bottom-0">
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
              <span>Page {currentPage} of {totalPages}</span>
              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
    </div>
  );
};

Table.propTypes = {
  titles: PropTypes.array,
  rows: PropTypes.array,
  itemsPerPage:PropTypes.string,
};


