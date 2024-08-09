import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const CalenderSvg = (props) => (
  <Svg
    width={18}
    height={20}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_182_10369)">
      <Path
        d="M14.0202 1.92798H4.08347C3.29949 1.92798 2.66394 2.6448 2.66394 3.52905V14.7365C2.66394 15.6208 3.29949 16.3376 4.08347 16.3376H14.0202C14.8042 16.3376 15.4397 15.6208 15.4397 14.7365V3.52905C15.4397 2.6448 14.8042 1.92798 14.0202 1.92798Z"
        stroke="#7685AA"
        strokeWidth={1.0625}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.8909 0.326904V3.52905"
        stroke="#7685AA"
        strokeWidth={1.0625}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.21277 0.326904V3.52905"
        stroke="#7685AA"
        strokeWidth={1.0625}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.66394 6.7312H15.4397"
        stroke="#7685AA"
        strokeWidth={1.0625}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_182_10369">
        <Rect
          width={17.0344}
          height={19.2129}
          fill="white"
          transform="translate(0.534668 0.326904)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CalenderSvg;