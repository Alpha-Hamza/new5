/* eslint-disable @next/next/no-img-element */

export default function SecondSection() {
  return (
    <div className="relative     ">
      

      <div className=" flex-col space-y-[48px]  ">
        <div className="w-[556px]">
          <h1 className="text-[24px] text-[#1F2937] font-bold ">
            Leave us a Message
          </h1>
          <p className="text-[16px] text-[#1F2937] font-normal">
            Trust is essential for companies whose business models are based on
            sensitive customer data. A transparent and complete Privacy Policy
            agreement, which explains exactly what information a company
            collects and how it uses that information, inspires trust in a
            business.
          </p>
        </div>
        <div>
          <div className="flex  ">
            <img src="./images/phone.svg" alt=" " className="  " />
            <h1 className="ml-[14.25px]  font-semibold text-[#1F2937] text-[20px] ">
              Phone
            </h1>
          </div>
          <p className="mt-[8px] font-medium text-[16px] ">
            Mobile: (917) 613-8553 <br />
            Office: (212) 539-4966
          </p>
        </div>
        <div>
          <div className="flex  ">
            <img src="./images/mail.svg" alt=" " className="  " />
            <h1 className="ml-[14.25px]  font-semibold text-[#1F2937] text-[20px] ">
            Email
            </h1>
          </div>
          <p className="mt-[8px] font-medium text-[16px] ">
          mgb@corcoran.com
          </p>
        </div>
        <div>
          <div className="flex  ">
            <img src="./images/location1.svg" alt=" " className="  " />
            <h1 className="ml-[14.25px]  font-semibold text-[#1F2937] text-[20px] ">
              New York Office
            </h1>
          </div>
          <p className="mt-[8px] font-medium text-[16px] ">
            218 West 18th Street 6th Floor <br />
            New York, NY 10011
          </p>
        </div>
      </div>
    </div>
  );
}
