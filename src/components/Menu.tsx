import React, { useEffect } from "react";

interface MenuProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  isRotated: boolean;
  setIsRotated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({
  show,
  setShow,
  isRotated,
  setIsRotated,
}) => {
  const transformfnc = () => {
    setIsRotated(!isRotated);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsRotated(false); // Hide when screen size is `lg` or larger
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsRotated]);

  return (
    <>
      <div
        className="w-full box-border py-4 h-12"
        onClick={() => {
          transformfnc();
          setShow(!show);
        }}
      >
        <div
          className={`space-y-2 relative box-border transform transition-transform duration-500 ${
            isRotated ? "translate-y-2 " : "translate-y-0"
          }   `}
        >
          <div
            className={`rotate-line py-[1.5px] w-8 bg-black transform transition-transform duration-500 ${
              isRotated
                ? "rotate-[-130deg] translate-x-[-0.25rem]  "
                : "rotate-0"
            }`}
          ></div>
          <div
            className={`rotate-line py-[1.5px] w-8 bg-black transform transition-transform duration-500 origin-left ${
              isRotated ? "rotate-[-45deg]    " : "rotate-0"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Menu;
