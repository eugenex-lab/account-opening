import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Confirmation() {
  return (
    <>
      <section className=" w-full h-full">
        <div className="md:hidden px-6 py-6 md:pb-0">
          <Image
            src="https://res.cloudinary.com/dan4b75j7/image/upload/v1715953681/wealth_app/SkT_1_bea8vp.svg"
            width={50}
            height={50}
            alt="sankore logo"
          />
        </div>
        <Card className="md:py-4 relative border-[#161822] bg-[#161822]/50 rounded-2xl md:rounded-r-2xl md:rounded-l-none w-auto z-20">
          <div className="absolute inset-0 backdrop-blur-sm bg-[#161822]/90 -z-10 rounded-2xl md:rounded-r-2xl md:rounded-l-none"></div>
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl text-[#F5F5F5] tracking-wide">
                  Confirm your Information
                </h1>
                <p className="text-[#989AA4] text-xs md:text-base tracking-wide">
                  Fill in your personal data
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-10 text-[#F5F5F5]">
            <div className="grid grid-cols-2 gap-8 ">
              <div className="w-1/3">
                <p className="text-xs md:text-smn text-[#989AA4]">Title</p>
                <h6 className="text-sm text-[#F5F5F5] font-light">Dr.</h6>
              </div>

              <div className="w-2/3">
                <p className="text-xs md:text-smn text-[#989AA4]">Name</p>
                <h6 className="text-sm text-[#F5F5F5] font-light">
                  Kelvin Ogbowure
                </h6>
              </div>

              <div className="w-3/4">
                <p className="text-xs md:text-smn text-[#989AA4]">
                  Date of Birth
                </p>
                <h6 className="text-sm text-[#F5F5F5] font-light">
                  12 June 1966
                </h6>
              </div>

              <div className="w-3/4">
                <p className="text-xs md:text-smn text-[#989AA4]">
                  State of Origin
                </p>
                <h6 className="text-sm text-[#F5F5F5] font-light">Kaduna</h6>
              </div>

              <div className="w-1/2">
                <p className="text-xs md:text-smn text-[#989AA4]">Occupation</p>
                <h6 className="text-sm text-[#F5F5F5] font-light">Surgeon</h6>
              </div>

              <div className="w-1/2">
                <p className="text-xs md:text-smn text-[#989AA4]">Location</p>
                <h6 className="text-sm text-[#F5F5F5] font-light">Abuja</h6>
              </div>

              <div className="w-2/3">
                <p className="text-xs md:text-smn text-[#989AA4]">
                  Email Address
                </p>
                <h6 className="text-sm text-[#F5F5F5] font-light">
                  kelvin.o@savannah.com
                </h6>
              </div>

              <div className="w-3/3">
                <p className="text-xs md:text-smn text-[#989AA4]">
                  Phone Number
                </p>
                <h6 className="text-sm text-[#F5F5F5] font-light">
                  +234 701 3840 932
                </h6>
              </div>

              <div className="w-[250px]">
                <p className="text-xs md:text-smn text-[#989AA4]">Address</p>
                <h6 className="text-sm text-[#F5F5F5] font-light">
                  No. 365, Name of Street, LGA, Cross River, County
                </h6>
              </div>
            </div>
          </CardContent>

          <div className="flex justify-end mt-[40px] md:mt-[70px] pb-4 p-4">
            <Button
              type="submit"
              className="bg-[#C5C58F] h-12 text-base text-[#161822] md:text-lg w-48 hover:bg-[#F5F5F5]"
            >
              Continue
            </Button>
          </div>
        </Card>
      </section>
    </>
  );
}
