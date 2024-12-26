// import Toolspage from "./Toolspage";
// import Footer from "./Footer";

// const About = () => {
//   return (
//     <>
//       <div>
//         {" "}
//         <div className="relative  pt-[8.5rem]   xl:pt-[5.6rem]   bg-neutral-50  flex">
//           <div className="mx-auto  max-w-[1348px] px-2 xxs:px-2 xs:px-4 sm:px-8 lg:px-14 text-left">
//             <div className="mb-20 grid-cols-1 space-y-20 items-end sm:mb-28  sm:px-2 md:grid-cols-12  md:gap-6 lg:grid lg:px-0">
//               <div className=" col-span-7 col-start-1  lg:text-left">
//                 <div>
//                   <h1 className="xl:mt-[14vh] whyte-text xs:text-6xl  text-5xl  sm:text-6xl  xl:text-7xl font-bold tracking-[-0.02em] text-neutral-900 ">
//                     Hi there,
//                   </h1>
//                   <h1 className="mt-3 whyte-text xs:text-6xl mb-20  italic text-5xl  sm:text-6xl xl:text-7xl font-bold tracking-[-0.02em] text-neutral-900 ">
//                     I'm Bonnie
//                   </h1>{" "}
//                 </div>
//                 <div className="flex flex-col space-y-6 order-2 ">
//                   <p
//                     className="px-1 sm:px-0 text-neutral-900 text-base whyte-text sm:text-lg font-[350] tracking-[0.02em]"
//                     typeof="paragraph"
//                   >
//                     As an end-to-end product designer, I love solving problems
//                     through simplifying the complexity and translating
//                     data-driven strategy to intuitive design. I contribute to
//                     designing new features and optimising existing products from
//                     start to finish. This includes interviewing users for
//                     research and testing, creating workshops, user flows,
//                     wireframes, prototypes and dev-ready final designs.
//                   </p>
//                   <p
//                     className="px-1 sm:px-0 text-neutral-900 text-base whyte-text sm:text-lg font-[350] tracking-[0.02em]"
//                     typeof="paragraph"
//                   >
//                     Currently, I’m a Product Designer at Grow, where we develop
//                     powerful technology to help Australian Super Funds deliver
//                     outstanding outcomes to customers. After hours, I make some
//                     exciting things for the internet.
//                   </p>
//                   <p
//                     className="px-1 sm:px-0 text-neutral-900 text-base whyte-text sm:text-lg font-[350] tracking-[0.02em]"
//                     typeof="paragraph"
//                   >
//                     I live in Sydney, Australia, where I spend my free time
//                     exploring its beautiful nature and searching good coffee and
//                     good vibes. One of my favourite things to do is watching sun
//                     rise at Coogee beach.
//                   </p>
//                   <p
//                     className="px-1 sm:px-0 text-neutral-900 text-base whyte-text sm:text-lg font-[350] tracking-[0.02em]"
//                     typeof="paragraph"
//                   >
//                     Shoot me a message for a coffee or chat ✌
//                   </p>
//                 </div>{" "}
//               </div>

//               <div className="relative  col-span-4 col-start-9 text-center  lg:text-left order-1 ">
//                 <div className=" rounded-full border-2 border-black w-full h-full">
//                   <img
//                     src="./Fanny.jpg"
//                     className=" w-full h-full rounded-full object-cover "
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Toolspage />
//       <Footer />
//     </>
//   );
// };

// export default About;
import Toolspage from "./Toolspage";
import Footer from "./Footer";
import Ishowtodo from "./Ishowtodo";
import GridAbout from "./GridAbout";

const About = () => {
  return (
    <>
      <div>
        <div className="relative pt-[8.5rem] xl:pt-[5.6rem] bg-neutral-50 flex">
          <div className="mx-auto max-w-[1348px] px-2 xxs:px-2 xs:px-4 sm:px-8 lg:px-14 text-left">
            <div className="lg:text-left ">
              <h1 className="xl:mt-[14vh] whyte-text xs:text-6xl text-5xl sm:text-6xl xl:text-7xl font-bold tracking-[-0.02em] text-neutral-900">
                Hi there,
              </h1>
              <h1 className="mt-3 whyte-text xs:text-6xl mb-10 italic text-5xl sm:text-6xl xl:text-7xl font-bold tracking-[-0.02em] text-neutral-900">
                I'm Bonnie
              </h1>
            </div>
            <div className=" grid-cols-1 xl:space-y-0 space-y-20 items-end sm:mb-28 sm:px-2 md:grid-cols-12 md:gap-6 lg:grid lg:px-0">
              <div className=" relative col-span-4 col-start-9 mb-0 lg:mb-20  xl:text-center lg:text-left lg:order-2 ">
                <div className="rounded-full border-2 border-black w-full max-w-[36rem] max-h-[36rem] h-full">
                  <img
                    src="./Fanny.jpg"
                    className="w-full max-h-[36rem] max-w-[36rem] h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-6 col-span-7 col-start-1   ">
                <p className="px-1 sm:px-0 text-neutral-900 text-base whyte-text sm:text-lg font-[350] tracking-[0.02em]">
                  As an end-to-end product designer, I love solving problems
                  through simplifying the complexity and translating data-driven
                  strategy to intuitive design. I contribute to designing new
                  features and optimizing existing products from start to
                  finish. This includes interviewing users for research and
                  testing, creating workshops, user flows, wireframes,
                  prototypes, and dev-ready final designs.
                </p>
                <p className="px-1 sm:px-0 text-neutral-900 text-base whyte-text sm:text-lg font-[350] tracking-[0.02em]">
                  Currently, I’m a Product Designer at Grow, where we develop
                  powerful technology to help Australian Super Funds deliver
                  outstanding outcomes to customers. After hours, I make some
                  exciting things for the internet.
                </p>
                <p className="px-1 sm:px-0 text-neutral-900 text-base whyte-text sm:text-lg font-[350] tracking-[0.02em]">
                  I live in Sydney, Australia, where I spend my free time
                  exploring its beautiful nature and searching for good coffee
                  and good vibes. One of my favorite things to do is watching
                  the sun rise at Coogee Beach.
                </p>
                <p className="px-1 sm:px-0 text-neutral-900 text-base whyte-text sm:text-lg font-[350] tracking-[0.02em]">
                  Shoot me a message for a coffee or chat ✌
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ishowtodo />
      <Toolspage />
      <GridAbout />
      <Footer />
    </>
  );
};

export default About;
