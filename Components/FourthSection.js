/* eslint-disable @next/next/no-img-element */
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
export default function FourthSection() {
  return (
    <div className="     mx-auto container 2xl:max-w-full  max-w-[90%]  rounded-[12px]   drop-shadow-md bg-white  ">
      <h3 className="sm:text-[16px] text-[14px] font-medium text-[#1F2937] ml-10 pt-[48px]">
        Get{" "}
        <span className="sm:text-[16px] text-[14px] font-black text-[#FF9900CC]">
          Connected
        </span>
      </h3>
      <h1 className="sm:text-[40px] text-[20px] font-bold text-[#1F2937] border-b-2 ml-10">
        Contact us
      </h1>
      <div className="lg:flex pb-[196px] xl:w-auto lg:max-w-[95%] ">
        <div className="xl:w-[50%] lg:w-[40%] lg:mt-[108.21px] mt-[28px] ml-10 ">
          <SecondSection />
        </div>
        <div className="xl:w-[40%] lg:w-[60%] lg:mt-[32.21px] mt-[64px] ml-10  ">
          <ThirdSection />
        </div>
      </div>
    </div>
  );
}
