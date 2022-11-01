import Image from "next/image";
import Link from "next/link";

function TestimonialsSection() {
  return (
    <div className="pt-[120px] bg-[#F0F0EF]">
      <div className="max-w-[1400px] mx-auto text-center px-3">
        <h3 className="text-[58px] font-bold leading-[60px]">
          We come prepared
        </h3>
        <p className="mt-[28px]">
          Locate available options for your unique journey!
        </p>
        <div className="mt-[40px] flex flex-wrap justify-center text-white gap-[30px]">
          <div
            className={`flex flex-col justify-end px-[24px] bg-[url('/images/Rectangle4.png')] bg-no-repeat bg-center bg-cover w-[337px] rounded-[10px] h-[450px]`}
          >
            <h4 className="text-[40px] font-bold">Mental Health</h4>
            <div className="flex items-center gap-x-5 justify-center mt-[22px] mb-[42px]">
              <button className="uppercase text-[13px] font-bold">
                view more
              </button>
              <div className="w-[20px] h-[20px] relative">
                <Image src="/images/Icon2.png" fill alt="icon" />
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col justify-end px-[24px] bg-[url('/images/Rectangle5.png')] bg-no-repeat bg-center bg-cover w-[337px] rounded-[10px] h-[450px]`}
          >
            <h4 className="text-[40px] font-bold">Addiction</h4>
            <div className="flex items-center gap-x-5 justify-center mt-[22px] mb-[42px]">
              <button className="uppercase text-[13px] font-bold">
                view more
              </button>
              <div className="w-[20px] h-[20px] relative">
                <Image src="/images/Icon2.png" fill alt="icon" />
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col justify-end px-[24px] bg-[url('/images/Rectangle6.png')] bg-no-repeat bg-center bg-cover w-[337px] rounded-[10px] h-[450px]`}
          >
            <h4 className="text-[40px] font-bold">Crisis</h4>
            <div className="flex items-center gap-x-5 justify-center mt-[22px] mb-[42px]">
              <button className="uppercase text-[13px] font-bold">
                view more
              </button>
              <div className="w-[20px] h-[20px] relative">
                <Image src="/images/Icon2.png" fill alt="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-5 justify-center mt-[42px]">
          <Link
            href=""
            className="text-[#EDB331] uppercase font-bold text-[13px]"
          >
            Browse all resources
          </Link>
          <div className="w-[20px] h-[20px] relative">
            <Image src="/images/Icon3.png" fill alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
