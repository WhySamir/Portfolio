import { Cake, MoveRight } from "lucide-react";
import Toolspage from "./Toolspage";
import AlignSlider from "./AlignSlider";
import Footer from "./Footer";
// index.tsx or App.tsx

const Photopage = () => {
  return (
    <>
      <div className="relative  pt-[8.5rem]   xl:pt-[5.6rem]   bg-neutral-50  flex">
        <div className="mx-auto  max-w-[1348px] xxs:px-2 xs:px-4 sm:px-8 lg:px-14 lg:text-left">
          <div className="mb-20 grid-cols-1 space-y-20 items-end sm:mb-28  sm:px-20 md:grid-cols-12  md:gap-6 lg:grid lg:px-0">
            <div className=" col-span-5 col-start-1  text-center lg:text-left">
              <h1 className=" whyte-text xs:text-6xl  text-5xl  sm:text-8xl  xl:text-9xl font-bold tracking-[-0.02em] text-neutral-900 ">
                Product
              </h1>
              <h1 className="whyte-text xs:text-6xl mb-12  italic text-5xl  sm:text-8xl xl:text-9xl font-bold tracking-[-0.02em] text-neutral-900 ">
                designer
              </h1>
              <p
                className="px-1 sm:px-0 text-neutral-900 text-base whyte-text sm:text-lg font-[350] tracking-[0.02em]"
                typeof="paragraph"
              >
                I'm Bonnie, a product designer with a knack for turning problems
                and opportunities into user-driven strategic solutions with
                delightful and intuitive interface design. Currently, working at{" "}
                {""}
                <span className="text-black  underline decoration-purple-500 decoration-[1.2px]">
                  Grow
                </span>
                .
              </p>
              <div className=" col-span-5 mt-8  rounded-full border-2 border-neutral-900  sm:mt-12 ">
                {/* <div className=" box rounded-full h-auto w-full border border-black"> */}
                <div className="p-3 flex items-center justify-between ">
                  <div className="flex items-center">
                    <div className="absolute ">
                      <img
                        src="./Fanny.jpg"
                        width="64"
                        height="64"
                        className="rounded-full h-full"
                        alt=""
                      />
                      <span className="absolute -right-[0.1rem] bottom-[0.2rem] flex  h-[0.875rem] w-[0.875rem] ">
                        <div className="relative inline-flex h-[0.875rem] w-[0.875rem] shrink-0 rounded-full border-2 border-neutral-50">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75"></span>
                          <span className="relative inline-flex h-full w-full rounded-full bg-purple-600"></span>
                        </div>
                      </span>
                    </div>
                    <div className="xl:pl-[12vh] lg:pl-[6vw] pl-[10vh] xxs:pl-[16vw] sm:pl-[12vh]   font-semibold text-md xxs:text-2xl">
                      7:22 pm
                    </div>
                  </div>
                  <div className="pancake flex sm:gap-4 text-lg">
                    <Cake />
                    Netflix
                  </div>
                  <div className="flex gap-2 ">
                    <a href="">
                      <button
                        type="button"
                        className="gap-4 group flex items-center cursor-pointer text-md justify-center   whitespace-nowrap font-medium opacity-100 disabled:pointer-events-none disabled:select-none  text-base  text-neutral-900 sm:text-lg "
                      >
                        <div
                          className="flex items-center justify-center rounded-full h-16 w-16 p-[0.625rem]
                        bg-purple-400 text-neutral-900 border-2 border-black
                        transition-all
                        group-hover:translate-y-[-0.125rem] 
                        group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        >
                          <MoveRight />
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  col-span-6 col-start-8  text-center  lg:text-left">
              <div className=" rounded-t-[20.625rem] border-2 border-black  transition-shadow shadow-[16px_16px_0px_0px_rgba(180,100,260,1)]">
                <img
                  src="./s.jpg"
                  width="900"
                  // height="1120"
                  sizes="100vw"
                  alt=""
                  className=" object-cover rounded-t-[20.625rem]  lg:max-h-[80vh] w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toolspage />
      <AlignSlider />
      <Footer />
    </>
  );
};

export default Photopage;
