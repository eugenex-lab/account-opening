import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ConfirmID() {
  return (
    <>
      <section className="relative w-full h-full">
        <div className="px-6 py-6 md:py-0 md:hidden">
          <Image
            src="https://res.cloudinary.com/dan4b75j7/image/upload/v1715953681/wealth_app/SkT_1_bea8vp.svg"
            width={50}
            height={50}
            alt="sankore logo"
          />
        </div>
        <Card className="md:py-8 p-2 relative border-[#161822] bg-[#161822]/50 rounded-2xl md:rounded-r-2xl md:rounded-l-none w-full z-20">
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
              <div className="">
                <p className="text-xs md:text-smn text-[#989AA4]">First Name</p>
                <h6 className="text-sm text-[#F5F5F5] font-light">Olukemi</h6>
              </div>

              <div className="">
                <p className="text-xs md:text-smn text-[#989AA4]">Last Name</p>
                <h6 className="text-sm text-[#F5F5F5] font-light">Philips</h6>
              </div>

              <div className="col-span-2">
                <p className="text-xs md:text-smn text-[#989AA4]">
                  Identification Document
                </p>
                <h6 className="text-sm text-[#F5F5F5] font-light">
                  International Passport
                </h6>
              </div>

              <div className="">
                <p className="text-xs md:text-smn text-[#989AA4]">Id Number</p>
                <h6 className="text-sm text-[#F5F5F5] font-light">
                  5601321131
                </h6>
              </div>

              <div className="">
                <p className="text-xs md:text-smn text-[#989AA4]">
                  Issue Authority
                </p>
                <h6 className="text-sm text-[#F5F5F5] font-light">Abuja</h6>
              </div>

              <div className="">
                <p className="text-xs md:text-smn text-[#989AA4]">Issue Date</p>
                <h6 className="text-sm text-[#F5F5F5] font-light">
                  12 Aug 2022
                </h6>
              </div>

              <div className="">
                <p className="text-xs md:text-smn text-[#989AA4]">
                  Expiry Date
                </p>
                <h6 className="text-sm text-[#F5F5F5] font-light">
                  11 Aug 2027
                </h6>
              </div>
            </div>
          </CardContent>

          <div className="flex items-center justify-center px-4 gap-4 w-full py-4 mt-28">
            <Link href={"/update"}>
              <div className="w-full">
                <Button
                  type="submit"
                  className="border border-[#C5C58F] bg-[#161822] h-14 text-base  text-[#989AA4] md:w-44 lg:w-52 md:text-lg hover:bg-[#F5F5F5]"
                >
                  Update Data
                </Button>
              </div>
            </Link>

            <Link href={"/reference"}>
              <div className="w-full">
                <Button
                  type="submit"
                  className="bg-[#C5C58F] h-14 text-base text-[#161822] md:w-44 lg:w-52 md:text-lg hover:bg-[#F5F5F5]"
                >
                  Continue
                </Button>
              </div>
            </Link>
          </div>
        </Card>
      </section>
    </>
  );
}
