import * as React from "react";
import Svg, { Path } from "react-native-svg";
const OtherSvg = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 18.75C7.17 18.75 3.25 14.82 3.25 10C3.25 5.18 7.17 1.25 12 1.25C16.83 1.25 20.75 5.18 20.75 10C20.75 14.82 16.83 18.75 12 18.75ZM12 2.75C8 2.75 4.75 6 4.75 10C4.75 14 8 17.25 12 17.25C16 17.25 19.25 14 19.25 10C19.25 6 16 2.75 12 2.75Z"
      fill="#344D67"
    />
    <Path
      d="M18 22.75H6C5.59 22.75 5.25 22.41 5.25 22C5.25 21.59 5.59 21.25 6 21.25H18C18.41 21.25 18.75 21.59 18.75 22C18.75 22.41 18.41 22.75 18 22.75Z"
      fill="#344D67"
    />
  </Svg>
);
export default OtherSvg;
