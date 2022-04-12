/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <div className=" bg-[#111827]  mt-[159.74px]   ">
    <div className="mx-auto container relative flex border-b-2 border-[#1F2937]  ">
      <div className="w-[380px] pt-[48px] ">
        <img
          src="./images/FooterLogo.svg"
          alt=" "
          className=" cursor-pointer  "
        />
        <h1 className="text-[18px]  my-[14px] font-bold text-[#FFFFFF]">
          Blumstein
        </h1>
        <p className="text-[14px] pb-20 my-[14px] font-medium text-[#9CA3AF]">
          Whether it be a rental or sale, co-op, condo, townhouse or new
          development site Meris and Kenny have the knowledge, connections and
          expertise to make deals happen.
        </p>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-y-[18px] gap-x-[48px] mx-auto my-auto mt-[121px]  ">
      <button className="cursor-pointer  font-medium w-[150px] flex justify-start items-center text-[#9CA3AF]">
      Watch & Learn
        </button>
        <button className="cursor-pointer font-medium w-[150px] flex justify-start items-center text-[#9CA3AF]">
        Bragging Rights
        </button>
        <button className="cursor-pointer  font-medium w-[150px] flex justify-start items-center   text-[#9CA3AF]">
        Trustimonials
        </button>
        <button className="cursor-pointer  font-medium w-[150px] flex justify-start items-center  text-[#9CA3AF]">
        Read & Learn
        </button>
        <button className="cursor-pointer  font-medium w-[150px] flex justify-start items-center    text-[#9CA3AF]">
        Our Current Listings
        </button>
        <button className="cursor-pointer  font-medium w-[150px] flex justify-start items-center    text-[#9CA3AF]">
        See us in Action
        </button>
        <button className="cursor-pointer  font-medium w-[150px] flex justify-start items-center   text-[#9CA3AF]">
        Our Team
        </button>
        <button className="cursor-pointer  font-medium w-[150px] flex justify-start items-center    text-[#9CA3AF]">
        Press
        </button>
        <button className="cursor-pointer  font-medium w-[150px] flex justify-start items-center    text-[#9CA3AF]">
        Contact us
        </button>
      </div>
      <div>
        <h1 className="text-[20px] font-bold  mt-[121px] mb-[26px] text-[#FFFFFF]">Stay Updated with Team Blumstein</h1>
      <div className=" relative  w-[471px]  h-[56px]    ">
          <input
            type={"text"}
            placeholder="Your Email"
            className="  relative   w-full bg-[#374151] h-full  placeholder:text-[#FFFFFF]  placeholder:px-[20px]"
          />

          <button className="  absolute  text-[#ffffff] font-medium tracking-tight text-[16px]  bg-[#E68A00] w-[30%]  h-full text-[#FFFFFF]      right-[0px]       ">
          Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="flex mx-auto container py-[32px] ">
      <p className="text-[16px] font-normal text-[#D1D5DB]">© 2021 Blumstein | All Rights Reserved</p>
      <div className="flex ml-auto space-x-[33.5px]">
      <img src="./images/fi1.svg" alt=" " className=" " />
      <img src="./images/fi2.svg" alt=" " className=" " />
      <img src="./images/fi3.svg" alt=" " className=" " />
      <img src="./images/fi4.svg" alt=" " className=" " />
      <img src="./images/fi5.svg" alt=" " className=" " />
      </div>
    </div>
    </div>
  );
}
