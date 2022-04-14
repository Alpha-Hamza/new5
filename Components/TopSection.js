/* eslint-disable @next/next/no-img-element */
import Header from "./Header";
import FourthSection from "./FourthSection";
import Carousal from "./Carousal";

export default function TopSection() {
  return (
    <div className="   bg-[#FFFFFF]  w-full  ">
      <div className=" mx-auto container  lg:max-w-[100%]   ">
        <div className="flex mx-auto  2xl:max-w-[90%]  max-w-[90%]    ">
          <Header />
        </div>

        <div className="max-w-[100%]">
          <Carousal />
          <div className="mx-auto container 2xl:-mt-40 xl:-mt-[10%] lg:-mt-20 -mt-[7%] max-w-[90%]   ">
            <FourthSection />
          </div>
        </div>
      </div>
    </div>
  );
}
