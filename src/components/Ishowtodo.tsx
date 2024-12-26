const Ishowtodo = () => {
  return (
    <>
      <div className="bg-purple-100 py-24">
        <div className="mx-auto max-w-[1348px] px-4  sm:px-8 lg:px-14   ">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-left ">
            This is how I do it ✨
          </h2>
          <div className="lg:mt-[4rem] lg:grid lg:grid-cols-12 text-left">
            <div className="col-span-6 text-left lg:text-left">
              <p className="text-lg leading-8 lg:text-2xl font-semibold tracking-[0.02em]  max-w-3xl ">
                Putting users first in all aspects in the design process to
                create a meaningful and memorable experience.
              </p>
              <p className="mt-4 text-base lg:text-lg text-neutral-800 max-w-3xl tracking-[0.02em]">
                Good product design is not just about meeting the expectations
                of usability, utility, or aesthetics. I strive to deliver more
                than what&apos;s expected—an experience where users feel like
                their needs matter every step along the way while using the
                product. At the end of the day, what good is a product if it
                doesn&apos;t do what users need?
              </p>
            </div>
            <div className="col-start-8 col-span-5 mt-14  lg:mt-0 grid space-y-7  lg:flex flex-col ">
              <div className="flex items-start space-x-4 lg:space-x-5">
                <div className="bg-yellow-100 rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span role="img" aria-label="heart">
                    ❤️
                  </span>
                </div>
                <div>
                  <p className="text-neutral-900 xl:text-lg">
                    <span className="font-semibold  ">
                      Empathy is the key.{" "}
                    </span>
                    I ask all sorts of questions to make decisions about how
                    things will play out from a user perspective before jumping
                    into designing.
                  </p>
                </div>
              </div>
              <div className=" bg-black/10 w-full h-[0.1px]"></div>
              <div className=" flex items-start space-x-4 lg:space-x-5">
                <div className="bg-green-100 rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span role="img" aria-label="diamond">
                    💎
                  </span>
                </div>
                <div>
                  <p className="text-neutral-900 xl:text-lg">
                    <span className="font-semibold  ">Less is better. </span>
                    By eliminating unnecessary features or UI elements, I strive
                    to make the product more useful, consistent, and enjoyable
                    for users.
                  </p>
                </div>
              </div>{" "}
              <div className=" bg-black/10 w-full h-[0.1px]"></div>
              <div className="flex items-start space-x-4 lg:space-x-5">
                <div className="bg-blue-100 rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span role="img" aria-label="smile">
                    😊
                  </span>
                </div>
                <div>
                  <p className="text-neutral-900 xl:text-lg">
                    <span className="font-semibold  ">
                      Communicate with engineers throughout the process.{" "}
                    </span>
                    Iteration is inevitable but it doesn&apos;t have to be a
                    struggle when we both are willing to pivot and talk it
                    through.
                  </p>
                </div>
              </div>{" "}
              <div className=" bg-black/10 w-full h-[0.1px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ishowtodo;
