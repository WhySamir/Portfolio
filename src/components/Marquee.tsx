import { ThumbsUp } from "lucide-react";
import Marquee from "react-fast-marquee";

const Marquees = () => {
  return (
    <>
      <div className="bg-green-400 flex justify-between items-center py-4 font-[.8rem] tracking-wider border-b-black border-t-black border-2">
        <Marquee speed={60} gradient={false} pauseOnClick>
          <div className="flex items-center mr-8 ">
            <span className="mr-2 text-4xl py-4 ">Work with me together</span>
            <span className="mr-2">
              <ThumbsUp />
            </span>
          </div>
          <div className="flex items-center mr-8 ">
            <span className="mr-2 text-4xl py-4 ">Work with me together</span>
            <span className="mr-2">
              <ThumbsUp />
            </span>
          </div>
          <div className="flex items-center mr-8 ">
            <span className="mr-2 text-4xl py-4 ">Work with me together</span>
            <span className="mr-2">
              <ThumbsUp />
            </span>
          </div>
          <div className="flex items-center mr-8 ">
            <span className="mr-2 text-4xl py-4 ">Work with me together</span>
            <span className="mr-2">
              <ThumbsUp />
            </span>
          </div>
          <div className="flex items-center mr-8 ">
            <span className="mr-2 text-4xl py-4 ">Work with me together</span>
            <span className="mr-2">
              <ThumbsUp />
            </span>
          </div>
          <div className="flex items-center mr-8 text2">
            <span className="mr-2 text-4xl py-4 ">Work with me together</span>
            <span>
              <ThumbsUp />
            </span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Marquees;
