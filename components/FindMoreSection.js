import Image from "next/image";

function FindMoreSection() {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto py-[60px] mobile:py-[120px] px-3 flex flex-col mobile:flex-row gap-x-[4rem] items-center justify-center">
        <h3 className="mobile:max-w-[550px] font-bold text-[40px] leading-[46px]">
          Our mission is to help members of our community navigate mental health
          and addiction recovery.
        </h3>
        <div className="mt-8 mobile:mt-0 mobile:max-w-[380px]">
          <p className="leading-[27px]">
            We were founded as a ministry and believe strongly that we are
            called to comfort others with the comfort that we ourselves have
            been given when facing our own struggles. However, we are not
            evangelical in nature. We meet everyone where they are on their own
            unique journey without judgement.
          </p>
          <div className="mt-[42px] flex items-center gap-x-5">
            <p className="cursor-pointer font-bold text-[#EDB331]">
              Find out more
            </p>
            <div className="relative w-[20px] h-[20px]">
              <Image fill alt="logo" src="/images/Icon3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindMoreSection;
