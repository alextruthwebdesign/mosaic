import Image from "next/image";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="relative px-5 justify-center w-full bg-[url('/images/Rectangle1.png')] bg-no-repeat bg-center bg-cover">
      <div className="max-w-[1400px] mx-auto">
        <Navbar />
        <div className="max-w-[690px] mt-[10rem] pb-[13rem]">
          <p className="bg-[#C40006] text-white max-w-[480px] font-semibold py-1 px-2">
            Call: 346-703-0051 or Email: resources@mosaicsofmercy.com
          </p>
          <h1 className="font-bold text-[58px] leading-[68px] mt-[50px]">
            Helping families navigate mental health & addiction services.
          </h1>
          <p className="font-semibold mt-[29px]">
            A united community with a compassionate mindset towards mental
            health and addiction recovery, mobilized to make a difference in
            their own lives and the lives of others.
          </p>
          <button className="mt-[40px] uppercase bg-[#EDB331] text-white text-[13px] font-semibold w-[166px] py-3 rounded-[5px]">
            Get Resources
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
