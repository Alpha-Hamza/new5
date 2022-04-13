/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <div className="mx-auto  container  lg:my-0 md:my-auto  relative flex justify-between items-center   sm:w-full   my-[12px]  ">
      <img
        src="./images/Logo1.svg"
        alt=" "
        className="lg:w-auto md:max-w-[8%] sm:max-w-[10%] max-w-[20%] py-5  "
      />
      <div className="  2xl:flex hidden mx-auto container justify-end space-x-[48px]  items-center  ">
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
