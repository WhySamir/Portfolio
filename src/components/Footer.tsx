import { Figma } from "lucide-react";
import Marquees from "./Marquee";

const Footer = () => {
  return (
    <>
      <Marquees />
      <div className="  flex flex-col xl:flex-row  py-12  xl:py-24 w-full bg-slate-200 xl:justify-center xl:items-center ">
        <div className="xl:flex xl:space-x-12 px-4 sm:px-8 lg:px-12 lg:text-left  ">
          <div className="order-1 mb-8  grid grid-cols-2  gap-6 xl:order-2 xl:mb-0 xl:flex ">
            <a className="" href="/">
              <div className=" text-base font-[350]  hover:text-neutral-900  hover:text-base hover:font-medium  ">
                HOME
              </div>
            </a>
            <a className="" href="/about">
              <div className=" text-base font-[350]  hover:text-neutral-900  hover:text-base hover:font-medium   ">
                ABOUT
              </div>
            </a>
            <a className="" href="/work">
              <div className=" text-base font-[350]  hover:text-neutral-900  hover:text-base hover:font-medium   ">
                WORK
              </div>
            </a>
            <a className="" href="/login">
              <div className=" text-base font-[350]  hover:text-neutral-900  hover:text-base hover:font-medium   ">
                CASE STUDY
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:hello@bonniehong.com"
            >
              <div className=" text-base font-[350]  hover:text-neutral-900  hover:text-base hover:font-medium   ">
                CONTACT
              </div>
            </a>
            <a className="" href="/privacy">
              <div className=" text-base font-[350]  hover:text-neutral-900  hover:text-base hover:font-medium   ">
                PRIVACY
              </div>
            </a>
            <a className="" href="/terms">
              <div className=" text-base font-[350]  hover:text-neutral-900  hover:text-base hover:font-medium   ">
                TERMS
              </div>
            </a>
          </div>
          <div className="flex flex-col xl:pr-[6vh] xl:space-x-6 xl:order-1 ">
            <div className="  text-base font-[350]  hover:text-neutral-900  hover:text-base hover:font-medium ">
              2025 Vonnie HONG. All Rights reserved.
            </div>
          </div>{" "}
          <div className="mt-[5vh] xl:mt-0 flex gap-6 order-5 ">
            <Figma />
            <Figma />
            <Figma />
            <Figma />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
