import PropTypes from "prop-types";

export const Shipment = ({data, icon, iconBackGround}) => {
  return (
    <div className="w-64 h-40 flex flex-col justify-between bg-white p-4">

      <div className="flex items-center justify-between">
      {/* name and number/id */}
      <div className="">
        <div className="capitalize text-[16px] font-normal leading-5 text-[#1b1b1b] mb-1">{data?.name}</div>

        <div className="text-[22px] font-bold leading-9 tracking-wide text-[#1b1b1b]">{data?.id}</div>
      </div>

      {/* icon */}
      <div style={{backgroundColor: iconBackGround}} className={`p-3 rounded-2xl`}>
        {icon}
      </div>
      </div>


      <div className=" flex items-center gap-2">
        <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.1969 0L16.5151 2.29L11.575 7.17L7.52582 3.17L0.0246582 10.59L1.452 12L7.52582 6L11.575 10L17.9525 3.71L20.2707   6V0H14.1969Z" fill="#00B69B"/>
        </svg>

        <div className="">

          <span className="font-semibold text-[#00b69b] text-[16px] leading-5 mr-1">8.5%</span>

          <span className="font-normal text-[16px] leading-5 text-[#1b1b1b]">Up from yesterday</span>
        </div>
      </div>
    </div>
     
  );
};

Shipment.propTypes = {
  data:PropTypes.any,
  icon:PropTypes.element,
  iconBackGround:PropTypes.string

};
Shipment.defaultProps = {
  
};
