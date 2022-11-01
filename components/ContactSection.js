function ContactSection() {
  return (
    <div className="bg-[url('/images/Rectangle3.png')] bg-no-repeat bg-center bg-cover py-[80px] m:py-[160px] px-3">
      <div className="flex flex-col items-center m:items-start max-w-[1400px] mx-auto">
        <h3 className="text-[40px] font-bold">Talk to someone one-on-one!</h3>
        <p className="mt-[22px] max-w-[680px]">
          You’ll be connected to a trained mental health navigator who can offer
          support and information about mental health services and resources in
          your area. (Open Monday - Friday 9 am. to 5 pm.)
        </p>
        <div className="flex justify-center m:justify-start mt-[40px] gap-8 flex-wrap">
          <div className="px-3 text-center py-[40px] bg-white rounded-[10px] flex flex-col items-center justify-center max-w-[427px]">
            <p className="font-bold text-[24px]">Call Us</p>
            <p className="font-bold text-[24px]">346-703-0051</p>
            <p className="mt-[21px]">
              Non adipiscing nibh pretium aliquam accumsan tellus laoreet
              elementum. Dictum fermentum ac.
            </p>
            <button className="w-[129px] h-[44px] mt-[40px] uppercase bg-[#EDB331] text-white text-[13px] font-semibold w-[166px] py-3 rounded-[5px]">
              Call now
            </button>
          </div>
          <div className="px-3 text-center py-[40px] bg-white rounded-[10px] flex flex-col items-center justify-center max-w-[427px]">
            <p className="font-bold text-[24px]">Resource</p>
            <p className="font-bold text-[24px]">Provider Application</p>
            <p className="mt-[21px]">
              Eu, vitae mauris nec, eget. Diam proin erat neque venenatis.
              Malesuada malesuada risus non, amet. Tellus amet sed.
            </p>
            <button className="w-[129px] h-[44px] mt-[40px] uppercase bg-[#EDB331] text-white text-[13px] font-semibold w-[166px] py-3 rounded-[5px]">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
