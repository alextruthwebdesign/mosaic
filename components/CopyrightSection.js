import Image from "next/image";

const IMAGES = ["Vector1", "Vector2", "Vector3"];

function CopyrightSection() {
  return (
    <div className="bg-[#F0F0EF] text-[#5F5F60] pt-[40px] pb-[51px] px-3">
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-5 m:justify-between items-center">
        <div className="flex gap-10 items-center">
          <div className="relative min-w-[88px] w-[88px] h-[73px]">
            <Image src="/images/Group1.png" fill alt="logo" />
          </div>
          <div>
            <div className="flex items-center gap-x-5 gap-y-2 flex-wrap">
              <p>33114 Forest West Street</p>
              <div className="hidden m:block w-[1px] h-[15px] bg-[#5F5F60]"></div>
              <p>Magnolia, TX 77354</p>
              <div className="hidden m:block w-[1px] h-[15px] bg-[#5F5F60]"></div>
              <p>Phone: (346)703-0051</p>
            </div>
            <div className="mt-[10px] text-[13px]">
              <p>
                Copyright © 2022 Mosaics of Mercy | Website by{" "}
                <span className="font-bold">TRUTH WEB</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          {IMAGES.map((image, index) => {
            return (
              <div key={index} className="w-[36px] h-[36px] relative">
                <Image fill alt="icon" src={`/images/${image}.png`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CopyrightSection;
