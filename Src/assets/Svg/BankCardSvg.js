import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const BankCardSvg = (props) => (
  <Svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_304_11886)">
      <Path
        d="M1.875 1.875H13.125C13.2908 1.875 13.4497 1.94085 13.5669 2.05806C13.6842 2.17527 13.75 2.33424 13.75 2.5V12.5C13.75 12.6658 13.6842 12.8247 13.5669 12.9419C13.4497 13.0592 13.2908 13.125 13.125 13.125H1.875C1.70924 13.125 1.55027 13.0592 1.43306 12.9419C1.31585 12.8247 1.25 12.6658 1.25 12.5V2.5C1.25 2.33424 1.31585 2.17527 1.43306 2.05806C1.55027 1.94085 1.70924 1.875 1.875 1.875ZM12.5 7.5H2.5V11.875H12.5V7.5ZM12.5 5V3.125H2.5V5H12.5Z"
        fill="#7685AA"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_304_11886">
        <Rect width={15} height={15} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BankCardSvg;
