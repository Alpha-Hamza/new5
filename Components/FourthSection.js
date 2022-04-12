/* eslint-disable @next/next/no-img-element */
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
export default function FourthSection() {
  return (
    <div className="  -mt-40   mx-auto container ml-6 rounded-[12px]   drop-shadow-md bg-white  ">
      <h3 className="text-[16px] font-medium text-[#1F2937] ml-10 pt-[48px]">Get  <span className="text-[16px] font-black text-[#FF9900CC]">Connected</span></h3>
      <h1 className="text-[40px] font-bold text-[#1F2937] border-b-2 ml-10">Contact us</h1>
      <div className="flex pb-[196px] ">
        <div className="w-[50%] mt-[108.21px] ml-10 ">
        <SecondSection />

        </div>
        <div className="w-[40%] mt-[32.21px] ml-10  ">
        <ThirdSection/>
        </div>
       

      </div>
     
    </div>
  );
}
