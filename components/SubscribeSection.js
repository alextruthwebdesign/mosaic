const inputStyle =
  "bg-[#3F93A5] outline-none px-[25px] py-[10px] s:py-[3px] text-[13px] font-semibold flex-1";

function SubscribeSection() {
  return (
    <div className="bg-[#3F93A5] text-white py-[80px] flex flex-col items-center px-3 text-center">
      <h3 className="text-[58px] font-bold">Stay in touch</h3>
      <p className="mt-[23px]">
        Get the latest blogs, events, and more directly in your inbox.
      </p>
      <div className="w-full max-w-[886px] mt-[40px] flex flex-col items-center gap-y-5 m:gap-y-0 m:flex-row">
        <div className="w-full rounded-[5px] border-[1px] overflow-hidden flex flex-col s:flex-row">
          <input
            type="text"
            defaultValue="First name"
            className={`${inputStyle} border-b-[1px] s:border-b-0`}
          />
          <input
            type="text"
            defaultValue="Last name"
            className={`${inputStyle} border-b-[1px] s:border-b-0 border-l-0 s:border-l-[1px] s:my-[10px]`}
          />
          <input
            type="text"
            defaultValue="Email address"
            className={`${inputStyle} border-l-0 s:border-l-[1px] s:my-[10px]`}
          />
        </div>
        <button className="w-[300px] py-[14px] max-w-[250px] m:max-w-none m:translate-x-[-5px] bg-[#EDB331] uppercase text-[13px] font-bold px-6 rounded-[5px]">
          Subscribe to newsletter
        </button>
      </div>
    </div>
  );
}

export default SubscribeSection;
