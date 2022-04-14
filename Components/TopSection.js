/* eslint-disable @next/next/no-img-element */
import Header from "./Header";
import FourthSection from "./FourthSection";
import Carousal from "./Carousal";

export default function TopSection() {
  return (
    <div className="   bg-[#FFFFFF]  w-full  ">
      <div className=" mx-auto container  lg:max-w-[100%]   ">
        <div className="flex mx-auto  2xl:max-w-[90%]  md:w-full     ">
          <Header />
        </div>

        <div className="">
          <Carousal />
          <div className="mx-auto container lg:-mt-40 md:-mt-20 lg:max-w-[90%]   ">
            <FourthSection />
          </div>
        </div>
      </div>
    </div>
  );
}
