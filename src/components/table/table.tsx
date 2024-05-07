import React, { useEffect, useState } from "react";
import { Icons } from "../icons/icons";

interface Title {
  id: string;
  name: string;
  render?: () => React.ReactNode;
}

interface Row {
  key: string;
  [key: string]: React.ReactNode;
}

interface TableProps {
  titles?: Title[];
  rows: Row[];
}

export const Table: React.FC<TableProps> = ({ titles = [], rows }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentData, setCurrentData] = useState<Row[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);

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
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const numbers = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="mx-6 relative mt-4 h-full overflow-x-hidden">
      <div className="bg-white divide-y overflow-auto divide-gray-200 h-[90%] px-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-zinc-50 sticky top-0">
            <tr>
              {titles?.map((title) => (
                <th
                  key={title.id}
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 capitalize tracking-wider"
                >
                  {title.render ? title.render() : title.name}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData?.map((el) => (
              <tr
                key={el.key}
                className="bg-white border-b text-xs dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                {Object.values(el)
                  .slice(1)
                  .map((val, index) => (
                    <td
                      className="py-4 text-left pl-4 pr-2 min-w-28"
                      key={index}
                    >
                      {val}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination buttons */}
      <div className="absolute bottom-8 right-0 flex items-center justify-end mr-12 gap-8">
        <div className="flex items-center gap-2">
          <div className="text-xs">Items per Page:</div>
          <select
            className="outline-none bg-white text-xs border-b border-gray-300"
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            {numbers.map((number) => (
              <option className="" key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>

        <span className="text-xs">
          {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, rows.length)} of {rows.length}
        </span>

        <div className="flex items-center gap-4">
          {/* Assuming Icons component is properly typed */}
          {/* Fill color changed to accept both string and undefined */}
          <Icons
            onClick={() => handlePageChange(1)}
            name="leftArrowLast"
            fill={currentPage === 1 ? "#7b7b7d" : "#000"}
          />

          <Icons
            onClick={() =>
              handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
            }
            name="leftArrow"
            fill={currentPage === 1 ? "#7b7b7d" : "#000"}
          />

          <Icons
            onClick={() =>
              handlePageChange(
                currentPage < totalPages ? currentPage + 1 : totalPages
              )
            }
            name="rightArrow"
            fill={currentPage === totalPages ? "#7b7b7d" : "#000"}
          />

          <Icons
            onClick={() => handlePageChange(totalPages)}
            name="rightArrowLast"
            fill={currentPage === totalPages ? "#7b7b7d" : "#000"}
          />
        </div>
      </div>
    </div>
  );
};
