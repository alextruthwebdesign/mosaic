import Image from "next/image";

function Section() {
  return (
    <div className="lg:flex">
      <div className="flex-1 bg-[#79557E] flex gap-x-5 items-center justify-center text-white py-7">
        <p>Get Involved</p>
        <div className="w-[20px] h-[20px] relative">
          <Image fill src="/images/Icon2.png" alt="logo" />
        </div>
      </div>
      <div className="flex-1 bg-[#D86D1C] flex gap-x-5 items-center justify-center text-white py-7">
        <p>Resource Provider Application</p>
        <div className="w-[20px] h-[20px] relative">
          <Image fill src="/images/Icon2.png" alt="logo" />
        </div>
      </div>
      <div className="flex-1 bg-[#90BA6F] flex gap-x-5 items-center justify-center text-white py-7">
        <p>Listen To Podcast</p>
        <div className="w-[20px] h-[20px] relative">
          <Image fill src="/images/Icon2.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Section;
