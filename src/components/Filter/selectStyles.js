export const makeStyles = {
  container: (styles) => ({
    ...styles,
    width: "224px",
  }),
  control: (styles) => ({
    ...styles,
    border: "none",
    height: "50px",
    background: "rgba(247, 247, 251, 1)",
    borderRadius: "14px",
    padding: "14px 18px",
    alignContent: "center",
    with: "224px",
    cursor: "pointer",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "rgba(18, 20, 23, 1)",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "rgba(18, 20, 23, 1)" : "rgba(18, 20, 23, 0.2)",
    background: isFocused ? "rgba(247, 247, 251, 1)" : "#FFF",
    gap: "8px",
    with: "224px",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  menu: (styles) => ({
    ...styles,
    with: "224px",
    background: "#FFF",
    padding: "10px 12px",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    margin: "0",
  }),
  menuList: (styles) => ({
    ...styles,
    with: "224px",
    gap: "8px",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    "&::-webkit-scrollbar": {
      width: "8px",
    },

    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "rgba(18, 20, 23, 0.05)",
      borderRadius: "10px",
    },

    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgba(18, 20, 23, 0.05)",
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    width: "117px",
    color: "#121417",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    height: "auto",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    with: "224px",
    color: "rgba(18, 20, 23, 1)",
  }),
};

export const priceStyles = {
  container: (styles) => ({
    ...styles,
    width: "125px",
  }),
  control: (styles) => ({
    ...styles,
    border: "none",
    height: "50px",
    background: "rgba(247, 247, 251, 1)",
    borderRadius: "14px",
    padding: "14px 18px",
    cursor: "pointer",
    alignContent: "center",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "rgba(18, 20, 23, 1)",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "20px",
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "rgba(18, 20, 23, 1)" : "rgba(18, 20, 23, 0.2)",
    background: isFocused ? "rgba(247, 247, 251, 1)" : "#FFF",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "20px",
    with: "125px",
  }),
  menu: (styles) => ({
    ...styles,
    with: "125px",
    background: "#FFF",
    padding: "14px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    margin: "0",
  }),
  menuList: (styles) => ({
    ...styles,
    gap: "8px",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    "&::-webkit-scrollbar": {
      width: "8px",
    },

    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "rgba(18, 20, 23, 0.05)",
      borderRadius: "10px",
    },

    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgba(18, 20, 23, 0.05)",
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    width: "40px",
    color: "rgba(18, 20, 23, 1)",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  valueContainer: (styles) => ({
    ...styles,
    alignItems: "center",
    width: "125px",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    height: "fit-content",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "rgba(18, 20, 23, 1)",
    padding: "0",
  }),
};
