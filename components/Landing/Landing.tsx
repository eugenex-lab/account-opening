import Image from "next/image";
import LandingCard from "./LandingCard";

const Landing = () => {
  return (
    <>
      <section className="relative flex items-center justify-center bg-[#090B13] object-cover w-full">
        <Image
          src="https://res.cloudinary.com/dan4b75j7/image/upload/v1715929571/wealth_app/SankoreMosaic_1_vnlgqt.png"
          width={280}
          height={200}
          alt="clear"
          className="w-[100%] h-[100vh] custom-height-410 object-cover"
          quality={100}
        />
        <div className="absolute left-0 flex items-center justify-center w-4/6  2xl:w-[1006px]">
          <Image
            src="https://res.cloudinary.com/dan4b75j7/image/upload/v1715929602/wealth_app/bg-1_zwb53v.png"
            width={280}
            height={200}
            alt="clear"
            className="w-[100%] h-[100vh] custom-height-410 object-cover"
            quality={100}
          />
        </div>

        <div className="absolute w-auto z-50 mx-4 md:mx-0 xl:left-40">
          <LandingCard />
        </div>
      </section>
    </>
  );
};

export default Landing;
