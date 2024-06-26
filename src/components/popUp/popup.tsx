import React, { ReactNode } from "react";

interface PopupProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  icon?: ReactNode;
  iconBackground?: string;
  children: ReactNode;
}

export const Popup: React.FC<PopupProps> & {
  Header: React.FC<PopupHeaderProps>;
  Content: React.FC<PopupContentProps>;
  Footer: React.FC<PopupFooterProps>;
} = ({ show, setShow, children, icon, iconBackground }) => {
  return (
    <div
      className={`${show ? "visible" : "hidden"} fixed top-0 inset-0 bg-white bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full`}
    >
      <div className="relative">
        <div
          className={`bg-white px-8 py-4 rounded-lg shadow-md text-center border-t border-teal-100`}
        >
          {icon && (
            <div className="flex items-center justify-center mb-2">
              <span
                style={{
                  backgroundColor: `${iconBackground}`,
                }}
                className="px-2 py-2 rounded-full text-xl"
              >
                {icon}
              </span>
            </div>
          )}
          {children}
        </div>
        <div
          onClick={() => setShow(false)}
          className="absolute hover:scale-105 cursor-pointer text-sm top-1 right-2"
        >
          x
        </div>
      </div>
    </div>
  );
};

interface PopupHeaderProps {
  children: ReactNode;
}

Popup.Header = ({ children }) => (
  <div className="font-semibold text-base leading-5 text-darkBlack mb-1">
    {children}
  </div>
);

interface PopupContentProps {
  children: ReactNode;
}

Popup.Content = ({ children }) => (
  <div className="text-[14px] text-[#667085] leading-5">{children}</div>
);

interface PopupFooterProps {
  children: ReactNode;
}

Popup.Footer = ({ children }) => (
  <div className="mt-8 flex items-center justify-center gap-4 w-full">
    {children}
  </div>
);

Popup.Header.displayName = "Popup.Header";
Popup.Content.displayName = "Popup.Content";
Popup.Footer.displayName = "Popup.Footer";
