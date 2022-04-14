/* eslint-disable @next/next/no-img-element */
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
export default function FourthSection() {
  return (
    <div className="     mx-auto container   rounded-[12px]   drop-shadow-md bg-white max-w-[100%]  ">
      <h3 className="sm:text-[16px] text-[14px] font-medium text-[#1F2937] sm:ml-10 ml-5 pt-[48px]">
        Get{" "}
        <span className="sm:text-[16px] text-[14px] font-black text-[#FF9900CC]">
          Connected
        </span>
      </h3>
      <h1 className="sm:text-[40px] text-[20px] font-bold text-[#1F2937] border-b-2 sm:ml-10 ml-5">
        Contact us
      </h1>
      <div className="lg:flex pb-[196px] xl:w-auto sm:max-w-[97%] ">
        <div className=" lg:w-[50%] lg:mt-[108.21px] mt-[28px] sm:ml-10 ml-5 ">
          <SecondSection />
        </div>
        <div className=" lg:w-[50%] lg:mt-[32.21px] mt-[64px] sm:ml-10 ml-5  ">
          <ThirdSection />
        </div>
      </div>
    </div>
  );
}
