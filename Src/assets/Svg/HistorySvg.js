import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const HistorySvg = (props) => (
  <Svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_304_11880)">
      <Path
        d="M7.5 1.25C10.9519 1.25 13.75 4.04813 13.75 7.5C13.75 10.9519 10.9519 13.75 7.5 13.75C4.04813 13.75 1.25 10.9519 1.25 7.5H2.5C2.5 10.2613 4.73875 12.5 7.5 12.5C10.2613 12.5 12.5 10.2613 12.5 7.5C12.5 4.73875 10.2613 2.5 7.5 2.5C5.96 2.5 4.5825 3.19625 3.66562 4.29062L5 5.625H1.25V1.875L2.77938 3.40375C3.925 2.085 5.615 1.25 7.5 1.25ZM8.125 4.375V7.24062L10.1519 9.2675L9.2675 10.1519L6.875 7.75813V4.375H8.125Z"
        fill="#7685AA"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_304_11880">
        <Rect width={15} height={15} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HistorySvg;
