"use client";

import Image from "next/image";

export default function Set() {
  return (
    <>
      <section className="h-full">
        <div className="md:hidden px-6 pb-7 md:pb-0">
          <Image
            src="https://res.cloudinary.com/dan4b75j7/image/upload/v1715953681/wealth_app/SkT_1_bea8vp.svg"
            width={50}
            height={50}
            alt="sankore logo"
            className=""
          />
        </div>
        <div className="py-10 p-6 relative border-[#161822] bg-[#161822]/50 rounded-2xl md:rounded-r-2xl md:rounded-l-none w-full z-20">
          <div className="absolute inset-0 backdrop-blur-lg bg-[#161822]/90 -z-10 rounded-2xl md:rounded-r-2xl md:rounded-l-none"></div>
          <div className="w-full flex flex-col items-center justify-center space-y-6">
            <div className="mb-8 w-full flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dan4b75j7/image/upload/v1717444018/wealth_app/Group_495_uioxtl.png"
                width={150}
                height={50}
                className=""
                alt="set"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-6">
              <p className="text-sm md:text-lg text-[#B69562]">Welcome</p>
              <p className="text-xl md:text-2xl text-[#FFFFFF]">
                Dr. Kelvin Ogbowure
              </p>
              <p className="w-full md:w-[353px] text-center text-base md:text-lg text-[#7A7C86]">
                You will receive an email of confirmation with further
                information on what to do next.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center pt-8">
              <div className="flex items-center justify-center gap-4 pb-8">
                <div className="border border-[#282B3C] w-28 md:w-20 h-20 flex items-center justify-center rounded-2xl bg-[#282B3C]">
                  <Image
                    src="https://res.cloudinary.com/dan4b75j7/image/upload/v1715969023/wealth_app/Black_Gold_xgfy6k.png"
                    width={50}
                    height={50}
                    alt="wealth_logo"
                    className=" text-[#B69562] object-cover"
                  />
                </div>
                <p className="w-full md:w-[220px] text-sm md:text-base text-[#F5F5F5]">
                  Invest and view your portfolio on our Exclusive app
                </p>
              </div>

              <div>
                <Image
                  src="https://res.cloudinary.com/dan4b75j7/image/upload/v1717444034/wealth_app/Group_523_yphhi3.png"
                  alt="img"
                  width={250}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
