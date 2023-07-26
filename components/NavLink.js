import React from "react";

export default function NavLink(props) {
  const mobileStyle = props.isMobile ? "text-2xl" : "";
  return (
    <div className="flex items-center p-2 font-medium text-slate-800 hover:text-slate-600 hover:underline">
      <div className={`mr-2 inline-block ${mobileStyle}`}>{props.icon}</div>
      <span className={`whitespace-nowrap ${mobileStyle}`}>
        {props.children}
      </span>
    </div>
  );
}
