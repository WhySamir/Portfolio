import { Facebook, MoveRight } from "lucide-react";
import "../App.css";
import { useState, useEffect } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRotated: React.Dispatch<React.SetStateAction<boolean>>;
}
const SmNav: React.FC<Props> = ({ show, setShow, setIsRotated }) => {
  const location = useLocation();
  const [closing, setClosing] = useState(false);
  const [activePath, setActivePath] = useState(location.pathname);
  const handleSetActive = (path: string) => {
    setClosing(true);
    setTimeout(() => {
      setShow(false);
      setIsRotated(false);
      setActivePath(path);
    }, 300);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShow(!show); // Hide when screen size is `lg` or larger
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setShow]);
  return (
    <>
      <div
        className={`${
          closing ? "closing-animation" : ""
        } lg:hidden   w-full  fixed  left-0 top-[5vh] px-[4vh] sm:px-[8vh]  bg-slate-100  h-full overflow-hidden`}
      >
        <div className="flex flex-col pt-[16vh] sm:pt-[7.125rem] justify-between gap-[4vh]  mb-8">
          <Link
            to="/"
            className={`text-xl leading-7 text-neutral-700 ${
              activePath === "/" ? "text-[#111111] font-bold  " : ""
            }"`}
            onClick={() => handleSetActive("/")}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={`text-xl leading-7 text-neutral-700 ${
              activePath === "/about" ? "text-[#111111] font-bold  " : ""
            }"`}
            onClick={() => handleSetActive("/about")}
          >
            ABOUT
          </Link>

          <Link
            to="/work"
            className={`text-xl leading-7 text-neutral-700  ${
              activePath === "/work" ? "text-[#111111] font-bold " : ""
            }"`}
            onClick={() => handleSetActive("/work")}
          >
            WORK
          </Link>
          <Link
            to="/case-study"
            className={`text-xl leading-7 text-neutral-700   ${
              activePath === "/case-study" ? "text-[#111111] font-bold " : ""
            }"`}
            onClick={() => handleSetActive("/case-study")}
          >
            CASE STUDY
          </Link>
        </div>
        <div className="lets pt-8">
          <button className="gap-4  flex items-center cursor-pointer text-md justify-center sm:text-lg">
            <div className="flex items-center ">
              <div
                className="  flex items-center justify-center circle  rounded-full p-[0.625rem]
               bg-purple-500 text-neutral-900 shadow-none transition-shadow group-hover:translate-y-[-0.125rem] group-active:bg-secondary-700 h-12 w-12 group-hover:shadow-xsButton
"
              >
                {" "}
                <MoveRight />
              </div>
            </div>
            <div className="">Lets Chat</div>
          </button>
        </div>
        <div className="inline-flex gap-2 pt-16 ">
          <a href="">
            <div className="inline-flex rounded p-3 hover:bg-purple-500  ">
              <Facebook size={24} />
            </div>
          </a>{" "}
          <a href="">
            <div className="inline-flex rounded p-3 hover:bg-purple-500  ">
              <Facebook size={24} />
            </div>
          </a>{" "}
          <a href="">
            <div className="inline-flex rounded p-3 hover:bg-purple-500  ">
              <Facebook size={24} />
            </div>
          </a>{" "}
          <a href="">
            <div className="inline-flex rounded p-3 hover:bg-purple-500  ">
              <Facebook size={24} />
            </div>
          </a>{" "}
          <a href="">
            <div className="inline-flex rounded p-3 hover:bg-purple-500  ">
              <Facebook size={24} />
            </div>
          </a>{" "}
        </div>
      </div>
    </>
  );
};

export default SmNav;
