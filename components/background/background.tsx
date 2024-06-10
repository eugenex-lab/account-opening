import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Background = () => {
  return (
    <>
      <div className=" md:rounded-l-2xl md:items-end hidden items-center justify-center md:flex bg-[url('https://res.cloudinary.com/dan4b75j7/image/upload/v1715929602/wealth_app/bg-1_zwb53v.png')] object-cover bg-[#090B13] w-full h-full">
        <div className="w-auto mx-4 md:mx-0 bottom-0">
          <Card className=" px-4 py-6 bg-transparent border-0 w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                {/* <div className="border border-[#C5C58F] rounded-full"> */}
                <Image
                  src="https://res.cloudinary.com/dan4b75j7/image/upload/v1715953681/wealth_app/SkT_1_bea8vp.svg"
                  width={50}
                  height={50}
                  alt="sankore logo"
                />
                {/* </div> */}
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-5 text-[#F5F5F5]">
              <h2 className="md:text-3xl tracking-wide">
                Building <br />{" "}
                <span className="italic gap-2 flex">
                  {" "}
                  Timeless <h2>Wealth</h2>
                </span>
              </h2>
              <p className="mt-4 text-[#989AA4] md:w-[250px] text-sm">
                Ascend to prosperity through exclusive pathways to elevated
                financial opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Background;
