import { useState } from "react";

interface Notification {
  id: number;
  notificationContent: string;
  dateTime: string;
}

interface NotificationsProps {
  data: Notification[];
  icon?: any;
}

export const Notifications: React.FC<NotificationsProps> = ({ data, icon }) => {
  const [show, setShow] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [readStatus, setReadStatus] = useState<{ [id: number]: boolean }>({});

  const toggleReadStatus = (id: number) => {
    if (!readStatus[id]) {
      setReadStatus((prevStatus) => ({
        ...prevStatus,
        [id]: true,
      }));
    }
  };

  const markAllAsRead = () => {
    const allIds = data.map((el) => el.id);
    const allReadStatus = allIds.reduce<{ [id: number]: boolean }>(
      (acc, curr) => {
        acc[curr] = true;
        return acc;
      },
      {}
    );
    setReadStatus(allReadStatus);
  };

  const allRead =
    data.length === Object.values(readStatus).filter(Boolean).length;

  const visibleData = showAll ? data : data.slice(0, 3);

  return (
    <div className="relative">
      <div
        onClick={() => setShow(!show)}
        className="mt-0.5 relative cursor-pointer"
      >
        {icon}
      </div>

      {!allRead && (
        <div className="absolute p-1 bg-red-500 rounded-full top-0 left-3"></div>
      )}

      <div
        className={`${show ? "" : "hidden"}  absolute z-10 top-8 -translate-x-2 w-80 h-auto px-4 bg-[#fafbff] shadow-lg rounded-lg`}
      >
        <div
          style={{ justifyContent: "space-between" }}
          className="flex items-center justify-between py-3.5 px-2"
        >
          <div className="font-medium text-xs leading-4">Notifications</div>
          <div
            onClick={markAllAsRead}
            className="text-xs font-normal leading-[14px] text-[#E11D07]  cursor-pointer"
          >
            Mark all as read
          </div>
        </div>

        <div className="px-2 py-3 font-medium text-xs leading-4">New</div>

        {visibleData?.map((el) => (
          <div
            onClick={() => toggleReadStatus(el.id)}
            key={el?.id}
            className={`p-2 border-b-2 border-gray-300 `}
          >
            <div
              className={`flex items-start gap-2 ${
                readStatus[el.id] ? "bg-white" : "bg-gray-100"
              } cursor-pointer p-2 rounded-md`}
            >
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.26405 14.1815C4.59041 14.5942 5.00628 14.9273 5.48026 15.1557C5.95423 15.3841 6.47391 15.5019 7.00005 15.5C7.52618 15.5019 8.04586 15.3841 8.51984 15.1557C8.99381 14.9273 9.40968 14.5942 9.73604 14.1815C7.92035 14.4276 6.07974 14.4276 4.26405 14.1815ZM12.0625 5.75V6.278C12.0625 6.91175 12.2425 7.53125 12.5815 8.0585L13.4125 9.35075C14.1708 10.5313 13.5918 12.1355 12.2725 12.5083C8.82536 13.4847 5.17473 13.4847 1.72755 12.5083C0.408296 12.1355 -0.170703 10.5313 0.587547 9.35075L1.41855 8.0585C1.75873 7.52702 1.93913 6.90903 1.9383 6.278V5.75C1.9383 2.8505 4.2048 0.5 7.00005 0.5C9.79529 0.5 12.0625 2.8505 12.0625 5.75Z"
                  fill="#202A31"
                />
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
          </div>
        ))}

        <div
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-3 gap-2 flex items-center justify-center cursor-pointer"
        >
          <div className="text-xs font-normal capitalize leading-4 text-[#e11d07]">
            {showAll ? "view less" : "view more"}
          </div>

          <div className="border rounded-full px-0.5 cursor-pointer py-1 border-[#e11d07]">
            <svg
              width="7"
              height="5"
              viewBox="0 0 7 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.1665 2.5H5.83317M5.83317 2.5L4.08317 0.75M5.83317 2.5L4.08317 4.25"
                stroke="#e11d07"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
