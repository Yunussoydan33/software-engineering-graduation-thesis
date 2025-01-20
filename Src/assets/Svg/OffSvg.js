import * as React from "react";
import Svg, { G, Circle, Defs, ClipPath, Rect } from "react-native-svg";
const OffSvg = (props) => (
  <Svg
    width={24}
    height={22}
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_641_1304)">
      <Circle cx={12} cy={12.5} r={9} stroke="#4D507A" strokeWidth={2} />
    </G>
    <Defs>
      <ClipPath id="clip0_641_1304">
        <Rect
          width={24}
          height={21}
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default OffSvg;
