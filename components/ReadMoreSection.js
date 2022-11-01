import Image from "next/image";
import Link from "next/link";

function ReadMoreSection() {
  return (
    <div className="pt-[82px] pb-[120px] bg-[#F0F0EF] px-3">
      <div className="max-w-[1400px] mx-auto flex flex-col m:flex-row items-center justify-center gap-10">
        <div className="m:max-w-[304px]">
          <p className="text-[#C40006] font-bold">March 28, 2022</p>
          <p className="m:translate-x-[-20px] px-5 py-2 mt-[20px] m:w-[445px] bg-white font-bold text-[40px] leading-[46px] z-10 relative">
            If nothing changes, nothing changes
          </p>
          <p className="mt-[54px]">
            “If you could kick the person in the pants responsible for most of
            your trouble, you wouldn’t sit for a month.” ~ Theodore Roosevelt
          </p>
          <div className="mt-[42px] flex items-center gap-x-5">
            <Link
              href=""
              className="uppercase text-[13px] text-[#EDB331] font-bold"
            >
              read more
            </Link>
            <div className="relative w-[20px] h-[20px]">
              <Image src="/images/Icon3.png" fill alt="logo" />
            </div>
          </div>
        </div>
        <div className="relative w-full m:w-[703px] h-[490px]">
          <Image
            src="/images/graduation.png"
            alt="graduation"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ReadMoreSection;
