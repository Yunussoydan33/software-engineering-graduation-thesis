import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SearchDoctorSvg = (props) => (
  <Svg
    width={16}
    height={20}
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.894 13.564C13.553 14.622 15.51 17.064 15.876 20H0C0.366 17.064 2.323 14.622 4.982 13.564L7.938 18L10.894 13.564ZM13.938 0V6C13.938 9.314 11.252 12 7.938 12C4.624 12 1.938 9.314 1.938 6V0H13.938ZM11.938 6H3.938C3.938 8.21 5.728 10 7.938 10C10.148 10 11.938 8.21 11.938 6Z"
      fill="white"
    />
  </Svg>
);
export default SearchDoctorSvg;
