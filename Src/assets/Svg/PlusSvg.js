import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PlusSvg = (props) => (
  <Svg
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22.5 45C10.0733 45 0 34.9268 0 22.5C0 10.0733 10.0733 0 22.5 0C34.9268 0 45 10.0733 45 22.5C45 34.9268 34.9268 45 22.5 45Z"
    />
    <Path
      d="M20.25 20.25H11.25V24.75H20.25V33.75H24.75V24.75H33.75V20.25H24.75V11.25H20.25V20.25Z"
      fill="#FFFFFF"  // Artı işareti beyaz
    />
  </Svg>
);

export default PlusSvg;
