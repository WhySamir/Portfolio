import { MoveRight } from "lucide-react";

import React from "react";
import { useState } from "react";
import Menu from "./Menu";
import { Link, useLocation } from "react-router-dom";
import SmNav from "./SmNav";

interface NavbarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar: React.FC<NavbarProps> = ({ show, setShow }) => {
  interface Navitems {
    label: string;
    path: string;
  }
  const navItems: Navitems[] = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "WORK", path: "/work" },
    { label: "CASE STUDY", path: "/case-study" },
  ];
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const handleSetActive = (path: string) => {
    setActivePath(path); // Set the active path
  };
  const [isRotated, setIsRotated] = useState(false);
  return (
    <>
      <div className=" backdrop-blur-md bg-neutral-100 fixed left-0 right-0 top-0 z-50 border border-b-neutral-200/70  bg-neutral-50/80  py-3 md:py-5 border-box ">
        <div className="mx-auto  max-w-[1324px] px-4 sm:px-8 lg:px-12 lg:text-left">
          <div className="flex items-center justify-between ">
            <Link
              className="inline-flex text-xl font-medium"
              to="/"
              onClick={() => {
                setActivePath("/");
              }}
            >
              Bonnie Hong
            </Link>
            <div className="hidden lg:flex justify-center items-center ">
              <div className="flex items-center justify-center">
                {navItems.map(
                  (
                    items: Navitems,
                    index: number //curentvalue,index,array
                  ) => (
                    <div key={index} className="relative px-6">
                      <Link
                        to={items.path}
                        onClick={() => handleSetActive(items.path)}
                      >
                        <div
                          className={`relative font-[350px] text-neutral-800    hover:font-medium ${
                            activePath === items.path
                              ? "text-[#111111] font-medium"
                              : ""
                          }`}
                        >
                          {items.label}
                        </div>
                        {activePath === items.path && (
                          <div className="absolute left-1/2 -ml-1 h-2 w-2 rounded-full bg-purple-500"></div>
                        )}
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="flex gap-2 ">
              <a href="" className="hidden sm:block">
                <button
                  type="button"
                  className="gap-4 group flex items-center cursor-pointer text-md justify-center   whitespace-nowrap font-medium opacity-100 disabled:pointer-events-none disabled:select-none  text-base  text-neutral-900 sm:text-lg "
                >
                  <div
                    className="flex items-center justify-center rounded-full h-12 w-12 p-[0.625rem]
               bg-purple-400 text-neutral-900 border-2 border-black
               transition-all
               group-hover:translate-y-[-0.125rem] 
               group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <MoveRight />
                  </div>

                  <p className="text-base font-medium text-neutral-900 ">
                    Lets Chat
                  </p>
                </button>
              </a>

              <div className="icon_small flex  lg:hidden">
                <div className="flex ml-4 ">
                  <Menu
                    show={show}
                    setShow={setShow}
                    isRotated={isRotated}
                    setIsRotated={setIsRotated}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <SmNav show={show} setShow={setShow} setIsRotated={setIsRotated} />
      )}
    </>
  );
};

export default Navbar;
