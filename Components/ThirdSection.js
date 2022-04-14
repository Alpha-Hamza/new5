/* eslint-disable @next/next/no-img-element */

export default function ThirdSection() {
  return (
    <div className="mx-auto container w-[100%] h-[672px] sm:space-y-10 ">
      <div className="sm:flex sm:space-x-10">
        <div className="sm:w-[50%]">
          <h1 className="text-[#1F2937]  text-[12px] font-medium ">
            First Name
          </h1>
          <div className="flex mt-[26px] relative items-center">
          <img src="./images/person-icon.svg" alt=" " className=" absolute ml-[15px]  " />
          <input
            type={"text"}
            placeholder="Makie"
            className="focus:outline-[#FF9900CC] w-full rounded-full h-[50px]   border-2 focus:border-[#FFE600CC] pl-10 "
          />

          </div>
        </div>
        <div className="sm:w-[50%] sm:mt-0  ">
          <h1 className="text-[#1F2937]  text-[12px] font-medium ">
            Last Name
          </h1>
          <div className="flex  relative mt-[26px]  items-center">
          <img src="./images/person-icon.svg" alt=" " className=" absolute ml-[15px]   " />
          <input
            type={"text"}
            placeholder="Clerk"
            className="focus:outline-[#FF9900CC]  w-full rounded-full h-[50px] pl-10  border-2"
          />
          </div>
        </div>

      </div>
      <div className="sm:my-0 my-[20px]">
          <h1 className="text-[#1F2937]  text-[12px] font-medium ">
          Email
          </h1>
          <div className="flex  relative mt-[26px]  items-center">
          <img src="./images/mail-icon.svg" alt=" " className=" absolute ml-[15px]   " />
          <input
            type={"text"}
            placeholder="makie_clerk69@gmail.com"
            className=" focus:outline-[#FF9900CC] w-full rounded-full h-[50px] pl-10 border-2 "
          />
          </div>
        </div>
        <div className="sm:my-0 my-[20px]">
          <h1 className="text-[#1F2937]  text-[12px] font-medium ">
          Phone Number
          </h1>
          <div className="flex  relative mt-[26px]  items-center">
          <img src="./images/call-icon.svg" alt=" " className=" absolute ml-[15px]   " />
          <input
            type={"text"}
            placeholder="Type Phone Number"
            className="focus:outline-[#FF9900CC]  w-full rounded-full h-[50px] pl-10  border-2 "
          />
          </div>
        </div>
        <div className="h-[40%] sm:my-0 my-[20px]">
          <h1 className="text-[#1F2937]  text-[12px] font-medium ">
          Message
          </h1>
          <div className="flex  relative  h-[100%]  items-center">
          <img src="./images/reader-icon.svg" alt=" " className=" absolute ml-[15px]   " />
          <input
            type={"text"}
            placeholder="Type Message"
            className="  w-full rounded-8 focus:outline-[#FF9900CC] pl-10  h-[70%] border-2 "
          />
          </div>
        </div>
        <div className="flex justify-start items-center">
        <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#FFC700CC] duration-300 relative  cursor-pointer bg-[#FF9900CC]   w-[168px] h-[48px]  rounded-[40px]  text-[16px]  font-bold text-[#FFFFFF] ">
        Send Message
        </button>
      </div>
    </div>
  );
}
