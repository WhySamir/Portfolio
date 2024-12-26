import { ArrowBigRight, MoveLeft, MoveRight } from "lucide-react";
import { useRef } from "react";

interface ImageDetails {
  Mainsrc: string;
  imgSrcSet: string;
  Title: string;
  ptag: string;
}
interface imgObject {
  [key: string]: ImageDetails; // Allows dynamic keys like imgSrc, imgSrc2, etc.
}
//imgObj which is obj vitra imgSrc's xa which is object itself
//so imbObject giving data type to imgobj as imgSrc's as (key and ImageDetails as value) which is objformat,
//ImageDetails have data type
const imgObj: imgObject = {
  imgSrc: {
    Mainsrc:
      "https://res.cloudinary.com/dcfrlqakq/image/upload/f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg",
    imgSrcSet:
      "https://res.cloudinary.com/dcfrlqakq/image/upload/w_320,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 320w,https://res.cloudinary.com/dcfrlqakq/image/upload/w_640,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 640w,https://res.cloudinary.com/dcfrlqakq/image/upload/w_1280,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 1280w,https://res.cloudinary.com/dcfrlqakq/image/upload/w_1920,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 1920w",
    Title: "title",
    ptag: "This is ptag",
  },
  imgSrc2: {
    Mainsrc:
      "https://res.cloudinary.com/dcfrlqakq/image/upload/f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg",
    imgSrcSet:
      "https://res.cloudinary.com/dcfrlqakq/image/upload/w_320,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 320w,https://res.cloudinary.com/dcfrlqakq/image/upload/w_640,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 640w,https://res.cloudinary.com/dcfrlqakq/image/upload/w_1280,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 1280w,https://res.cloudinary.com/dcfrlqakq/image/upload/w_1920,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 1920w",
    Title: "title2",
    ptag: "This is ptag2",
  },
  imgSrc3: {
    Mainsrc:
      "https://res.cloudinary.com/dcfrlqakq/image/upload/f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg",
    imgSrcSet:
      "https://res.cloudinary.com/dcfrlqakq/image/upload/w_320,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 320w,https://res.cloudinary.com/dcfrlqakq/image/upload/w_640,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 640w,https://res.cloudinary.com/dcfrlqakq/image/upload/w_1280,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 1280w,https://res.cloudinary.com/dcfrlqakq/image/upload/w_1920,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 1920w",
    Title: "title3",
    ptag: "This is ptag3",
  },
  imgSrc4: {
    Mainsrc:
      "https://res.cloudinary.com/dcfrlqakq/image/upload/f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg",
    imgSrcSet:
      "https://res.cloudinary.com/dcfrlqakq/image/upload/w_320,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 320w,https://res.cloudinary.com/dcfrlqakq/image/upload/w_640,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 640w,https://res.cloudinary.com/dcfrlqakq/image/upload/w_1280,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 1280w,https://res.cloudinary.com/dcfrlqakq/image/upload/w_1920,f_auto,q_auto/v1734794310/Fanny_jzqj5m.jpg 1920w",
    Title: "title",
    ptag: "This is ptag",
  },
};

const AlignSlider = () => {
  const entries = Object.entries(imgObj) as Array<[string, ImageDetails]>;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.children[0].clientWidth;
      console.log("Scroll Amount:", scrollAmount);
      console.log(
        "Current Scroll Position:",
        scrollContainerRef.current.scrollLeft
      );

      if (direction === "right") {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      }

      console.log(
        "New Scroll Position:",
        scrollContainerRef.current.scrollLeft
      );
    }
  };
  // const entries = Object.entries(imgObj) as [string, ImageDetails][];

  return (
    <>
      <div className="flex flex-col gap-y-2 mt-[14vh]  text-center">
        <h1 className="sm:text-5xl  font-bold text-xl text-center py-4 sm:px-10 px-2">
          See my latest work
        </h1>
        <p className="text-lg  opacity-75">
          Get an inside look into my creative process and see what's come along.
        </p>
        <a href="/" className=" text-blue-500 text-xl  font-[350] mt-[2vh]">
          Show me all projects
        </a>
      </div>
      <div
        className="mb-8 overflow-y-hidden sm:mb-8 no-scrollbar "
        ref={scrollContainerRef}
      >
        <div className="mx-auto max-w-[1324px] px-4 sm:px-8 lg:px-12 lg:text-left">
          <div className="mt-20 lg:mt-[4.875rem]">
            <div className="flex gap-4 sm:gap-8">
              {(entries as [string, ImageDetails][]).map(
                ([key, value]: [string, ImageDetails], index: number) => (
                  <div
                    key={index || key}
                    className="relative flex w-full max-w-[25rem] flex-shrink-0 flex-grow-0 flex-col"
                  >
                    <div className="flex flex-col transition-all">
                      <a href="/" className="group">
                        <div className="overflow-hidden rounded-2xl border-2 border-black transition-shadow group-hover:translate-y-[-4px]  group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                          <img
                            src={value.Mainsrc}
                            sizes="100vw"
                            srcSet={value.imgSrcSet}
                            alt="Optimized profile image of Fanny"
                            className="rounded-full h-auto w-full object-cover"
                            decoding="async"
                          />
                        </div>
                        <div className="pl-4 mt-5 flex">
                          <h3 className="pr-3 text-lg font-medium text-neutral-900 sm:text-xl">
                            {value.Title}
                          </h3>
                          <ArrowBigRight />
                        </div>
                        <p className="pl-4 mt-2 text-base text-neutral-700 sm:text-lg font-[350]">
                          {value.ptag}
                        </p>
                      </a>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 sm:mb-28 flex  px-4 sm:px-8 lg:text-left lg:px-14 mx-auto max-w-[1348px] justify-end items-end gap-4">
        <button
          type="button"
          aria-label="previous"
          onClick={() => handleScroll("left")}
          className="gap-4 group flex items-center cursor-pointer text-md justify-center   whitespace-nowrap font-medium opacity-100 disabled:pointer-events-none disabled:select-none  text-base  text-neutral-900 sm:text-lg "
        >
          <div
            className="flex items-center justify-center rounded-full h-16 w-16 p-[0.625rem]
                text-neutral-900 border-2 border-black group-hover:bg-black"
          >
            <MoveLeft className="group-hover:text-white" />
          </div>
        </button>
        <button
          type="button"
          aria-label="next"
          onClick={() => handleScroll("right")}
          className="gap-4 group flex items-center cursor-pointer text-md justify-center   whitespace-nowrap font-medium opacity-100 disabled:pointer-events-none disabled:select-none  text-base  text-neutral-900 sm:text-lg "
        >
          <div
            className="flex items-center justify-center rounded-full h-16 w-16 p-[0.625rem]
                text-neutral-900 border-2 border-black group-hover:bg-black"
          >
            <MoveRight className="group-hover:text-white" />
          </div>
        </button>
      </div>
    </>
  );
};

export default AlignSlider;
