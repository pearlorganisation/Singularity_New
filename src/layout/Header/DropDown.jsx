import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const DropDown = ({ setIsToggleOpen, isToggleOpen, name, links, active }) => {
  const [dropDown, setDropDown] = useState(false);
  const wrapperRef = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    console.log("pathName::", pathname);
    console.log(pathname.split("/")[1] === "services");
    console.log(pathname.split("/")[1] === "integrations");

    console.log("path:", pathname.split("/")[1]);
  }, [pathname]);

  useEffect(() => {
    function clickHandleOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setDropDown(false);
      }
    }
    document.addEventListener("mousedown", clickHandleOutside);
    return () => {
      document.removeEventListener("mousedown", clickHandleOutside);
    };
  }, [wrapperRef]);

  return (
    <div role="none" className="flex items-stretch cursor-pointer">
      <div
        className={`relative flex flex-col md:flex-row items-start md:items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-600 focus:outline-none focus-visible:outline-none ${
          active && "text-blue-600"
        }`}
      >
        <span
          className={``}
          ref={wrapperRef}
          onClick={() => {
            setDropDown(true);
          }}
        >
          {name}

          <i
            class={`fa-regular fa-chevron-down ${
              dropDown ? "rotate-[-90deg]" : "rotate-0"
            } transition-all pl-1 origin-center`}
          ></i>
        </span>
        <ul
          className={`md:absolute top-[4.5rem] w-full left-0 overflow-hidden md:bg-white ${
            dropDown
              ? "flex  text-black max-h-[30rem] md:max-h-max "
              : "max-h-[0rem] md:max-h-max visible md:invisible"
          } lg:min-w-[15rem] flex flex-col justify-start items-start transition-all shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px]`}
        >
          {links?.map((item) => {
            return (
              <NavLink
                onClick={() => {
                  setIsToggleOpen(!isToggleOpen);
                }}
                className={({ isActive }) =>
                  `px-4 py-2 border-b w-full hover:bg-slate-400/30 ${
                    isActive ? "text-blue-600" : ""
                  }`
                }
                to={`/${name.toLowerCase()}/${item.split(" ").join("")}`}
              >
                {item}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
