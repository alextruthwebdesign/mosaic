export const options1 = [
  {
    value: "Depression",
    label: "Depression",
  },
];
export const options2 = [
  {
    value: "Adults(26-53)",
    label: "Adults(26-53)",
  },
];

export const options3 = [
  {
    value: "Medicaid",
    label: "Medicaid",
  },
  {
    value: "Self Pay (Reduced)",
    label: "Self Pay (Reduced)",
  },
  {
    value: "Tricare",
    label: "Tricare",
  },
  {
    value: "Veterans",
    label: "Veterans",
  },
];

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: "13px",
    background: "white",
    color: "black",
    "&:hover": {
      background: "#edb331",
    },
  }),
  menu: (base) => ({
    ...base,
    width: "max-content",
    right: "0",
  }),
  control: () => ({
    border: "1px solid white",
    display: "flex",
    borderRadius: "5px",
    height: "100%",
    textAlign: "left",
    padding: "3px 25px",
    fontSize: "13px",
  }),
  singleValue: (provided, state) => {
    const color = "white";
    return {
      ...provided,
      color,
    };
  },
  input: (styles) => ({ ...styles, color: "white" }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "white",
    "&:hover": {
      color: "white",
    },
  }),
};

export const multiSelectStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: "13px",
    color: "black",
    "&:hover": {
      background: "#edb331",
    },
  }),
  menu: (base) => ({
    ...base,
    width: "max-content",
    right: "0",
  }),
  control: () => ({
    border: "1px solid white",
    display: "flex",
    borderRadius: "5px",
    height: "100%",
    textAlign: "left",
    padding: "0 25px",
    fontSize: "13px",
    ":before": {
      content: '"Select Insurance:"',
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
    },
  }),
  singleValue: (provided, state) => {
    const color = "white";
    return {
      ...provided,
      color,
    };
  },
  multiValue: (styles) => {
    const color = "white";
    const background = "#529eae";
    const borderRadius = "5px";
    const fontWeight = "bold";
    return {
      ...styles,
      color,
      background,
      borderRadius,
      fontWeight,
      padding: "2px 6px",
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: "white",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    display: "none",
  }),
  input: (styles) => ({
    ...styles,
    color: "white",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "white",
    "&:hover": {
      color: "white",
    },
  }),
};
console.log();
