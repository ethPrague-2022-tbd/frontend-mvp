import { useState } from "react";

interface Props {
  label?: string;
  icon?: JSX.Element;
  transparentBackground?: boolean;
  items: DDMItem[];
  className?: string;
}

export interface DDMItem {
  icon?: JSX.Element;
  label: string;
  desc?: string;
  action?: () => any;
  link?: string;
}

export const DropDownMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`relative inline-block text-left w-full ${props.className}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-center ${
          props.transparentBackground ? "bg-transparent" : ""
        }`}
      >
        {props.label}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right bg-black  border-white border">
          <div
            className={"divide-y divide-gray-100 py-1"}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {props.items.map((item) => {
              return (
                <a
                  key={item.label}
                  onClick={item.action}
                  className={`font-poppins' flex cursor-pointer items-center justify-between px-8 py-8 text-left font-normal text-white-800 hover:bg-gray-500 md:py-4`}
                  role="menuitem"
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
