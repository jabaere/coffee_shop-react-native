import React from "react";
import { SvgXml } from "react-native-svg";

const CallSVG = ({ color, size }) => {
  const svgMarkup = `<svg width=${size} height=${size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.5553 11.5413L13.5004 9.48637C12.9075 8.8935 11.9427 8.89354 11.3499 9.48637L10.4471 10.3892C8.38508 9.3094 6.69058 7.6149 5.61079 5.55289L6.51366 4.65002C7.10649 4.05715 7.10649 3.09245 6.51366 2.49957L4.45874 0.444654C3.86587 -0.148218 2.90116 -0.148218 2.30829 0.444654L0.664343 2.08864C-0.194626 2.94757 -0.221483 4.46177 0.588704 6.35222C1.31906 8.05641 2.65954 9.9332 4.36316 11.6368C6.06679 13.3404 7.94357 14.6809 9.64776 15.4113C10.564 15.804 11.3918 16 12.0995 16C12.852 16 13.4687 15.7783 13.9113 15.3357L15.5553 13.6917C15.8425 13.4045 16.0007 13.0227 16.0007 12.6165C16.0007 12.2104 15.8425 11.8285 15.5553 11.5413ZM14.6378 12.7743L12.9938 14.4182C12.5487 14.8633 11.489 14.7887 10.1589 14.2187C8.60279 13.5518 6.87032 12.3091 5.2806 10.7193C3.69093 9.12963 2.44815 7.3972 1.78124 5.84113C1.21124 4.51107 1.1366 3.45127 1.58174 3.00617L3.22568 1.36222C3.3127 1.27525 3.4542 1.27525 3.54117 1.36222L5.59609 3.41714C5.68306 3.50411 5.68306 3.64566 5.59609 3.73259L4.03985 5.28887L4.23559 5.70205C5.49217 8.35481 7.64517 10.5079 10.298 11.7644L10.7112 11.9601L12.2674 10.4039C12.3242 10.3471 12.3907 10.3385 12.4251 10.3385C12.4596 10.3385 12.526 10.347 12.5828 10.4039L14.6377 12.4588C14.6945 12.5156 14.7031 12.582 14.7031 12.6165C14.7031 12.651 14.6946 12.7174 14.6378 12.7743Z" fill=${color}/>
</svg>`;

  return <SvgXml xml={svgMarkup} fill={color} />;
};

export default CallSVG;
