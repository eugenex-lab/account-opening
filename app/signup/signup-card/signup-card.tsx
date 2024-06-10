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

export default function SignupCard() {
  return (
    <>
      <section className="relative w-auto h-full">
        <div className="md:hidden px-6 pb-20 md:pb-0">
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
              <div className="flex flex-col gap-2 p-2 w-full">
                <h1 className="text-xl md:text-2xl text-[#F5F5F5] tracking-wide">
                  Sign Up Options
                </h1>
                <p className="text-[#989AA4] text-xs md:text-base tracking-wide">
                  Register with your preferred means of authentication
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-40 text-[#F5F5F5] w-full">
            <div className="flex flex-col gap-4 w-full">
              <Link
                href="bvn"
                className="flex items-center gap-6 p-4 rounded-2xl border border-[#313241] bg-[#313241]"
              >
                <div>
                  <Image
                    src={
                      "https://res.cloudinary.com/dan4b75j7/image/upload/v1716036558/wealth_app/Vector1_gn8rk2.png"
                    }
                    width={20}
                    height={20}
                    alt="vector"
                  />
                </div>
                <div className="w-full">
                  <p className="text-[#F5F5F5] text-base md:text-lg tracking-wide">
                    Bank Verification Number
                  </p>
                  <p className="text-[#989AA4] text-xs md:text-sm tracking-wide">
                    Ascend to prosperity through exclusive
                  </p>
                </div>
              </Link>

              <Link href={"idcard"}>
                <div className="flex items-center gap-6 p-4 rounded-2xl border border-[#313241] bg-[#313241]">
                  <div>
                    <Image
                      src={
                        "https://res.cloudinary.com/dan4b75j7/image/upload/v1716036575/wealth_app/Group1_mfmbw7.png"
                      }
                      width={20}
                      height={20}
                      alt="vector"
                    />
                  </div>
                  <div>
                    <p className="text-[#F5F5F5] text-base md:text-lg tracking-wide">
                      Government Issues ID Card
                    </p>
                    <p className="text-[#989AA4] text-xs md:text-sm tracking-wide">
                      Ascend to prosperity through exclusive
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={"/form"}>
                <div className="flex items-center gap-6 p-4 rounded-2xl border border-[#313241] bg-[#313241]">
                  <div>
                    <Image
                      src={
                        "https://res.cloudinary.com/dan4b75j7/image/upload/v1716036584/wealth_app/Group2_xdmnwr.png"
                      }
                      width={20}
                      height={20}
                      alt="vector"
                    />
                  </div>
                  <div>
                    <p className="text-[#F5F5F5] text-base md:text-lg tracking-wide">
                      Form Fill
                    </p>
                    <p className="text-[#989AA4] text-xs md:text-sm tracking-wide">
                      Ascend to prosperity through exclusive
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
