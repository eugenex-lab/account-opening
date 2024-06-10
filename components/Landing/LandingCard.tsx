import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LandingCard() {
  return (
    <>
      <section className="relative w-auto">
        <div className="relative">
          <Card className="px-8 pt-6 flex flex-col justify-between relative border-[#161822] bg-[#161822]/50 rounded-2xl w-full lg:w-[623px] xl:h-[700px]">
            <div>
              <div className="absolute inset-0 backdrop-blur-sm bg-[#161822]/90 -z-10 rounded-2xl"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <div className="border border-[#C5C58F] rounded-full">
                    <Image
                      src="https://res.cloudinary.com/dan4b75j7/image/upload/v1715953681/wealth_app/SkT_1_bea8vp.svg"
                      width={50}
                      height={50}
                      alt="sankore logo"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#FFFFFF] tracking-wide text-sm md:text-xl">
                      SANKORE
                    </h4>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-36 md:mt-40 xl:mt-48 text-[#F5F5F5]">
                <h2 className="text-2xl md:text-4xl tracking-wide">
                  Building <br />{" "}
                  <h5 className="italic gap-2 flex">
                    {" "}
                    Timeless <h2 className="not-italic">Wealth</h2>
                  </h5>
                </h2>
                <p className="mt-4 text-[#989AA4] md:w-[462px] w-auto text-sm md:text-xl">
                  Ascend to prosperity through exclusive pathways to elevated
                  financial opportunities.
                </p>
              </CardContent>
            </div>
            <CardFooter className="flex flex-col md:flex-row items-center mt-14 justify-between gap-4">
              <div className="flex items-center justify-center gap-2 italic text-xs order-2 md:order-1 mt-2 md:mt-0">
                <span className="text-[#F5F5F5] text-sm">
                  in collaboration with
                </span>
                <Image
                  src="https://res.cloudinary.com/dan4b75j7/image/upload/v1715969023/wealth_app/Black_Gold_xgfy6k.png"
                  width={50}
                  height={50}
                  alt="wealth_logo"
                  className="w-8 h-8 text-[#B69562]"
                />
                <h6 className="text-[#B69562] not-italic text-base">BLACK</h6>
              </div>
              <Link
                href="/signup"
                className="order-1 md:order-2 mt-6 md:mt-0 w-full md:w-auto"
              >
                <Button className="w-full h-14 md:w-60 bg-[#C5C58F] text-[#161822] hover:bg-[#F5F5F5] text-base md:text-lg">
                  Get Started
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}
