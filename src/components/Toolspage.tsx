import { Figma, Plus } from "lucide-react";
import "../App.css";

const Toolspage = () => {
  return (
    <>
      <div className=" block items-center gap-12   bg-neutral-950  md:grid-cols-12 md:gap-6 lg:grid lg:py-28 xl:px-[10rem] px-4 py-20">
        <div className=" custom-dashed-border   col-span-10 col-start-2 text-white border-purple-500   rounded-xl">
          <div className="flex mb-2">
            <div className="block items-center pt-6 px-6 sm:pt-12 sm:px-12 md:col-span-10 space-y-10 lg:gap-3 xl:gap-6    lg:grid lg:items-end ">
              <div className="col-span-8 xl:col-span-6 ">
                <h2 className="mb-4 text-xl font-[450] tracking-[0.02em] text-white  sm:text-2xl ">
                  {" "}
                  Tools I use for my daily work ✦
                </h2>
                <p
                  typeof="paragraph"
                  className="font-[350] text-neutral-50 opacity-75  tracking-[0.02em] text-base sm:text-lg"
                >
                  The best way to stay on top of my work is by using these four
                  essential tools, either working solo or collaboratively in
                  team.
                </p>
              </div>

              <div className="col-span-4 space-y-6 sm:space-y-0 justify-start sm:flex gap-4 sm:gap-8 sm:pr-0 lg:col-start-10 lg:justify-center ">
                <div className="flex items-center justify-center gap-8">
                  <div className="flex justify-center items-center circle rounded-full h-16 w-16  border-[2.5px] border-white p-[0.625em] ">
                    <Figma />
                  </div>
                  <div className="flex justify-center items-center circle rounded-full h-16 w-16  border-[2.5px] border-white p-[0.625em] ">
                    <Figma />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-8">
                  <div className="flex justify-center items-center circle rounded-full h-16 w-16  border-[2.5px] border-white p-[0.625em] ">
                    <Figma />
                  </div>
                  <div className="flex justify-center items-center circle rounded-full h-16 w-16  border-[2.5px] border-white p-[0.625em] ">
                    <Figma />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-4 flex justify-end items-end  pr-4">
            <div className="bg-purple-600 ">
              {" "}
              <Plus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Toolspage;
