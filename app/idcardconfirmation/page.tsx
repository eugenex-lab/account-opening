import Image from "next/image";
import Background from "../../components/background/background";
import ConfirmID from "./confirmID/confirm";

export default function Confirm() {
  return (
    <>
      <div className="grid md:items-center md:justify-center relative w-full lg:w-full h-auto bg-[#090B13] min-h-screen">
        <div className="bg-[url('https://res.cloudinary.com/dan4b75j7/image/upload/v1715929571/wealth_app/SankoreMosaic_1_vnlgqt.png')] bg-cover bg-no-repeat w-3/10 lg:w-full h-full absolute inset-0 min-h-screen">
          <div className="w-full sm:w-7/10 lg:hidden bg-[url('https://res.cloudinary.com/dan4b75j7/image/upload/v1715929602/wealth_app/bg-1_zwb53v.png"></div>
        </div>

        <div className=" flex items-center justify-center relative z-10 py-10">
          <div className="w-5/6 md:hidden bg-[url('https://res.cloudinary.com/dan4b75j7/image/upload/v1715929602/wealth_app/bg-1_zwb53v.png')] bg-cover bg-no-repeat w-3/10 lg:w-full h-full absolute inset-0 min-h-screen">
            <div className="w-full md:hidden bg-[url('https://res.cloudinary.com/dan4b75j7/image/upload/v1715929602/wealth_app/bg-1_zwb53v.png"></div>
          </div>

          <div className="flex items-center z-20 md:hidden">
            <ConfirmID />
          </div>

          <div className="hidden md:block">
            <div className="hidden md:grid grid-flow-col items-center justify-center mx-4 md:mx-0 relative">
              <div className=" h-full">
                <Background />
              </div>

              <ConfirmID />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
