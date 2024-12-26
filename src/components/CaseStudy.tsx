import { MoveRight } from "lucide-react";
import Footer from "./Footer";

const CaseStudy = () => {
  return (
    <>
      <div className="h-full w-screen pt-[8.5rem]   xl:pt-[5.6rem]   bg-purple-100  flex">
        <div className="mx-auto  max-w-[1348px] text-left">
          <div className="sm:mt-[16vh] flex flex-col justify-center px-4  text-left ">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
              Case study
            </h1>
            <h1 className="text-5xl sm:italic md:text-7xl font-bold text-black mb-8">
              sneak peek
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-2xl font-semibold  text-black mt-12">
              Enjoy early access to my upcoming case study
            </p>

            {/* Highlighted Text */}
            <p className="text-base md:text-lg text-black my-8 rounded-md mb-8 max-w-xl">
              The case study contains confidential designs that showcase some
              features and concepts still in development.
            </p>

            {/* Password Input */}
            <form className="mt-6 w-full bg-transparet text-black">
              <input
                type="password"
                placeholder="Enter Password *"
                className="w-full  border-black border-2 text-black px-6 py-5 bg-transparent rounded-md focus:outline-none "
              />
            </form>
            <div className="flex items-center justify-center my-20">
              <a href="" className="text-center   sm:block">
                <button
                  type="button"
                  className="gap-4 group flex items-center cursor-pointer text-md justify-center   whitespace-nowrap font-medium opacity-100 disabled:pointer-events-none disabled:select-none  text-base  text-neutral-900 sm:text-lg "
                >
                  <div
                    className="flex items-center justify-center rounded-full h-16 w-16 p-[0.625rem]
               bg-purple-400 text-neutral-900 border-2 border-black
               transition-all
               group-hover:translate-y-[-0.125rem] 
               group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <MoveRight />
                  </div>

                  <p className="text-base font-medium text-neutral-900 ">
                    Unlock access
                  </p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudy;
