import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const UploadSvg = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_617_1036)">
      <Path
        d="M12.914 5.5H21.5C21.7652 5.5 22.0196 5.60536 22.2071 5.79289C22.3946 5.98043 22.5 6.23478 22.5 6.5V20.5C22.5 20.7652 22.3946 21.0196 22.2071 21.2071C22.0196 21.3946 21.7652 21.5 21.5 21.5H3.5C3.23478 21.5 2.98043 21.3946 2.79289 21.2071C2.60536 21.0196 2.5 20.7652 2.5 20.5V4.5C2.5 4.23478 2.60536 3.98043 2.79289 3.79289C2.98043 3.60536 3.23478 3.5 3.5 3.5H10.914L12.914 5.5ZM4.5 5.5V19.5H20.5V7.5H12.086L10.086 5.5H4.5ZM13.5 13.5V17.5H11.5V13.5H8.5L12.5 9.5L16.5 13.5H13.5Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_617_1036">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(0.5 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default UploadSvg;
