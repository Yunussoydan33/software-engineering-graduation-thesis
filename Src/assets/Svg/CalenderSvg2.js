import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const CalenderSvg2 = (props) => (
  <Svg
    width={19}
    height={18}
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_304_10649)">
      <Path
        d="M2 8.25H17V15C17 15.1989 16.921 15.3897 16.7803 15.5303C16.6397 15.671 16.4489 15.75 16.25 15.75H2.75C2.55109 15.75 2.36032 15.671 2.21967 15.5303C2.07902 15.3897 2 15.1989 2 15V8.25ZM13.25 2.25H16.25C16.4489 2.25 16.6397 2.32902 16.7803 2.46967C16.921 2.61032 17 2.80109 17 3V6.75H2V3C2 2.80109 2.07902 2.61032 2.21967 2.46967C2.36032 2.32902 2.55109 2.25 2.75 2.25H5.75V0.75H7.25V2.25H11.75V0.75H13.25V2.25Z"
        fill="#F5F5F5"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_304_10649">
        <Rect width={18} height={18} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CalenderSvg2;
