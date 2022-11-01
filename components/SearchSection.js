import Select from "react-select";
import {
  customStyles,
  multiSelectStyles,
  options1,
  options2,
  options3,
} from "../assets/selectOptions";

const inputStyle =
  "bg-[#3F93A5] border-[1px] rounded-[5px] outline-none px-[25px] py-[13px] text-[13px] font-semibold flex-1 min-w-[250px]";

function SearchSection() {
  return (
    <div className="bg-[#3F93A5] text-white flex flex-col items-center text-center pb-[60px] px-3">
      <p className="text-[40px] font-bold mt-[60px]">
        Find a mental help resource.
      </p>
      <p className="mt-[20px] max-w-[612px] text-center">
        Search below to find a therapist, psychiatrist, treatment center,
        support group, or other resources that meet your needs.
      </p>
      <div className="max-w-[1400px] w-full min-w-[250px]">
        <div className="mt-[40px] flex flex-wrap gap-3 justify-center w-full">
          <input className={inputStyle} type="text" defaultValue="Dallas" />
          <input className={inputStyle} type="text" defaultValue="75001" />
          <Select
            components={{
              IndicatorSeparator: () => null,
            }}
            className="flex-1 min-w-[250px]"
            options={options1}
            defaultValue={options1[0]}
            styles={customStyles}
          />
          <Select
            components={{
              IndicatorSeparator: () => null,
            }}
            className="flex-1 min-w-[250px]"
            options={options2}
            defaultValue={options2[0]}
            styles={customStyles}
          />
        </div>
        <div className="mt-[10px] flex flex-wrap w-full gap-3 w-full">
          <Select
            isClearable={false}
            isMulti
            components={{
              IndicatorSeparator: () => null,
            }}
            className="flex-1"
            options={options3}
            defaultValue={[options3[0], options3[1], options3[2], options3[3]]}
            styles={multiSelectStyles}
          />
          <button className="w-[112px] h-[44px] uppercase bg-[#EDB331] text-white text-[13px] font-semibold w-[166px] py-3 rounded-[5px]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
