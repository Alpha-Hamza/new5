/* eslint-disable @next/next/no-img-element */

export default function ThirdSection() {
  return (
    <div className=" w-[100%] h-[672px] sm:space-y-10 ">
      <div className="sm:flex sm:space-x-10">
        <div className="sm:w-[50%]">
          <h1 className="text-[#1F2937]  text-[12px] font-medium ">
            First Name
          </h1>
          <input
            type={"text"}
            placeholder="Makie"
            className=" w-full rounded-full h-[50px] placeholder:pl-10 mt-[26px] border-2 focus:border-[#FFE600CC] "
          />
        </div>
        <div className="sm:w-[50%] sm:mt-0 mt-[20px]">
          <h1 className="text-[#1F2937]  text-[12px] font-medium ">
            Last Name
          </h1>
          <input
            type={"text"}
            placeholder="Clerk"
            className="  w-full rounded-full h-[50px] placeholder:pl-10 mt-[26px]  border-2"
          />
        </div>

      </div>
      <div className="sm:my-0 my-[20px]">
          <h1 className="text-[#1F2937]  text-[12px] font-medium ">
          Email
          </h1>
          <input
            type={"text"}
            placeholder="makie_clerk69@gmail.com"
            className="  w-full rounded-full h-[50px] placeholder:pl-10 mt-[26px] border-2 "
          />
        </div>
        <div className="sm:my-0 my-[20px]">
          <h1 className="text-[#1F2937]  text-[12px] font-medium ">
          Phone Number
          </h1>
          <input
            type={"text"}
            placeholder="Type Phone Number"
            className="  w-full rounded-full h-[50px] placeholder:pl-10 mt-[26px] border-2 "
          />
        </div>
        <div className="h-[40%] sm:my-0 my-[20px]">
          <h1 className="text-[#1F2937]  text-[12px] font-medium ">
          Message
          </h1>
          <input
            type={"text"}
            placeholder="Type Message"
            className="  w-full rounded-8  placeholder:pl-10 mt-[26px] h-[70%] border-2 "
          />
        </div>
        <div className="flex justify-start items-center">
        <button className=" relative  cursor-pointer bg-[#FF9900CC]  w-[168px] h-[48px]  rounded-[40px]  text-[16px]  font-bold text-[#FFFFFF] ">
        Send Message
        </button>
      </div>
    </div>
  );
}
