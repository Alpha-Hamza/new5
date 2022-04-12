/* eslint-disable @next/next/no-img-element */
import Header from "./Header";
import FourthSection from "./FourthSection";

export default function TopSection() {
  return (
    <div className="   bg-[#FFFFFF]  w-full  ">
      <div className=" mx-auto container  lg:max-w-[100%] sm:max-w-[90%]">
        <div className="flex  md:w-full   ">
          <Header />
        </div>
        
        <div className="relative">

        <img src="./images/Banner.svg" alt=" " className=" " />
        <div className=" max-w-[100%] ">
        <FourthSection />

        </div>
        </div>
        


        
        
        
      </div>
    </div>
  );
}
