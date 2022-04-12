/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <div className="mx-auto container 2xl:max-w-[90%]  relative flex justify-between items-center  2xl:w-[100%] sm:w-full   my-[12px]  ">
      <img
        src="./images/Logo1.svg"
        alt=" "
        className="sm:w-auto max-w-[50%] "
      />
      <div className="  sm:flex hidden  justify-center space-x-[48px] items-center  ">
        <button className="cursor-pointer  font-medium  leading-[20px] text-[#4B5563] focus:border-b-2 border-[#FF9900CC] h-[22px]">
        Watch & Learn
        </button>

        <button className="cursor-pointer   leading-[20px] font-medium text-[#4B5563] focus:border-b-2 border-[#FF9900CC] h-[22px]">
        Read & Learn
        </button>

        <button className="cursor-pointer   leading-[20px] font-medium text-[#4B5563] focus:border-b-2 border-[#FF9900CC] h-[22px]">
        Our Team
        </button>
        <button className="cursor-pointer   leading-[20px] font-medium text-[#4B5563] focus:border-b-2 border-[#FF9900CC] h-[22px]">
        Bragging Rights
        </button>
        <button className="cursor-pointer   leading-[20px] font-medium text-[#4B5563] focus:border-b-2 border-[#FF9900CC] h-[22px]">
        Our Current Listings
        </button>
        <button className="cursor-pointer   leading-[20px] font-medium text-[#4B5563] focus:border-b-2 border-[#FF9900CC] h-[22px]">
        Press
        </button>
        <button className="cursor-pointer   leading-[20px] font-medium text-[#4B5563] focus:border-b-2 border-[#FF9900CC] h-[22px]">
        Trustimonials
        </button>
        <button className="cursor-pointer   leading-[20px] font-medium text-[#4B5563] focus:border-b-2 border-[#FF9900CC] h-[22px]">
        See us in Action
        </button>
        <button className="cursor-pointer   leading-[20px] font-medium text-[#4B5563] border-b-2 focus:border-b-2 border-[#FF9900CC] h-[22px]">
        Contact us
        </button>
      </div>
    </div>
  );
}