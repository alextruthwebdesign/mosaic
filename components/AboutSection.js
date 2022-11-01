function AboutSection() {
  return (
    <div className="bg-[#3F93A5] text-white">
      <div className="max-w-[1400px] mx-auto gap-x-[4rem] py-[60px] mobile:py-[120px] px-3 text-center mobile:flex items-center justify-center mobile:text-left">
        <div className="mb-20 mobile:mb-0">
          <h3 className="text-[40px] font-bold mobile:max-w-[337px]">
            What people say about Mosaics of Mercy...
          </h3>
          <button className="mt-[46px] w-[192px] h-[44px] uppercase bg-[#EDB331] text-white text-[13px] font-semibold w-[166px] py-3 rounded-[5px]">
            Read testimonials
          </button>
        </div>
        <div className="mobile:max-w-[620px]">
          <p className="italic">
            “In the midst of the chaos that became my life; Mosaics of Mercy
            provided me with a refuge of calm. I am so very fortunate to have
            found Paige, who in turn brought Sherry, Amy and Alison into my life
            and Mosaics of Mercy. The work they do, the lives they touch, the
            hope they bring, is indescribable; it is just AMAZING! Not only did
            they support me with resources and rally to help me while I was
            trying to help a loved one; I have been fortunate enough to support
            them, “make hearts” and see the work they do behind the scenes. The
            commitment, passion and desire to make a difference and help break
            the stigma can truly be felt in every area of this charity!”
          </p>
          <p className="mt-[40px] font-bold text-[13px] uppercase">
            Naetha, Parent in need of hope and navigation
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
