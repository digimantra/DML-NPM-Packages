import PropTypes from "prop-types";
import { useState } from "react";


export const Notifications = ({data}) => {

  const [showAll, setShowAll] = useState(false);
  const [readStatus, setReadStatus] = useState({}); // State to track read status



  const toggleReadStatus = (id) => {
    // Check if the status is false before setting it to true
    if (!readStatus[id]) {
      setReadStatus((prevStatus) => ({
        ...prevStatus,
        [id]: true, // Set status to true
      }));
    }
  };


  const markAllAsRead = () => {
    const allIds = data.map((el) => el.id);
    const allReadStatus = allIds.reduce((acc, curr) => {
      acc[curr] = true; // Set all status to true
      return acc;
    }, {});
    setReadStatus(allReadStatus);
    
  };

   // Check if any notification is unread
   const allRead = data.length === Object.values(readStatus).filter(Boolean).length;


  const visibleData = showAll ? data : data.slice(0, 3);



  return (
    <div className="w-72 h-auto px-4 bg-[#fafbff] shadow-lg rounded-lg">

      {/* TOP NOTIFICATION INDICATOR */}
      <div className="-mx-3 mt-0.5 relative w-fit cursor-pointer">

        {!allRead &&(
        <div className="absolute p-1 bg-red-500 rounded-full left-2"></div>
        )}

        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.26405 14.1815C4.59041 14.5942 5.00628 14.9273 5.48026 15.1557C5.95423 15.3841 6.47391 15.5019 7.00005 15.5C7.52618 15.5019 8.04586 15.3841 8.51984 15.1557C8.99381 14.9273 9.40968 14.5942 9.73604 14.1815C7.92035 14.4276 6.07974 14.4276 4.26405 14.1815ZM12.0625 5.75V6.278C12.0625 6.91175 12.2425 7.53125 12.5815 8.0585L13.4125 9.35075C14.1708 10.5313 13.5918 12.1355 12.2725 12.5083C8.82536 13.4847 5.17473 13.4847 1.72755 12.5083C0.408296 12.1355 -0.170703 10.5313 0.587547 9.35075L1.41855 8.0585C1.75873 7.52702 1.93913 6.90903 1.9383 6.278V5.75C1.9383 2.8505 4.2048 0.5 7.00005 0.5C9.79529 0.5 12.0625 2.8505 12.0625 5.75Z" fill="#202A31"/>
        </svg>
      </div>
 

      {/* Notifications heading */}
      <div className="flex items-center justify-between py-3.5 px-4">
        <div className="font-medium text-xs leading-4">Notifications</div>
        <div onClick={markAllAsRead}  className="text-[12px] font-normal leading-[14px] text-[#e11d07] cursor-pointer">Mark all as read</div>
      </div>

      {/* new */}
      <div className="px-4 py-3 font-medium text-xs leading-4">
        New
      </div>


      {/* Notification maps */}
      {visibleData?.map((el)=>(
        <div onClick={() => toggleReadStatus(el.id)} key={el?.id} className={`flex items-start gap-2 p-4 border-b-2 border-gray-300 ${
          readStatus[el.id] ? "bg-gray-50" : "bg-gray-200"
        } cursor-pointer`}>
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.26405 14.1815C4.59041 14.5942 5.00628 14.9273 5.48026 15.1557C5.95423 15.3841 6.47391 15.5019 7.00005 15.5C7.52618 15.5019 8.04586 15.3841 8.51984 15.1557C8.99381 14.9273 9.40968 14.5942 9.73604 14.1815C7.92035 14.4276 6.07974 14.4276 4.26405 14.1815ZM12.0625 5.75V6.278C12.0625 6.91175 12.2425 7.53125 12.5815 8.0585L13.4125 9.35075C14.1708 10.5313 13.5918 12.1355 12.2725 12.5083C8.82536 13.4847 5.17473 13.4847 1.72755 12.5083C0.408296 12.1355 -0.170703 10.5313 0.587547 9.35075L1.41855 8.0585C1.75873 7.52702 1.93913 6.90903 1.9383 6.278V5.75C1.9383 2.8505 4.2048 0.5 7.00005 0.5C9.79529 0.5 12.0625 2.8505 12.0625 5.75Z" fill="#202A31"/>
          </svg>


          <div className="">
           <div className="text-[14px] mb-1 font-normal leading-4 text-[#1b1b1b]">
             {el?.notificationContent}
           </div>


            <div className="text-[12px] text-[#667085] font-normal leading-[14.5px]">
              {el?.dateTime}
            </div>
          </div>
        </div>
      ))}
       
      {/*load More */}
      <div onClick={()=>setShowAll(!showAll)} className="px-4 py-3 gap-2 flex items-center justify-center cursor-pointer">
          <div className="text-xs font-normal capitalize leading-4 text-[#e11d07]">
            {showAll? "view less":"view more"}
          </div>

          <div className="border rounded-full px-0.5 cursor-pointer py-1 border-[#e11d07]">
              <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.1665 2.5H5.83317M5.83317 2.5L4.08317 0.75M5.83317 2.5L4.08317 4.25" stroke="#e11d07" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </div>
          
      </div>
    </div>
  )
}


Notifications.propTypes = {
  data: PropTypes.array.isRequired,
};