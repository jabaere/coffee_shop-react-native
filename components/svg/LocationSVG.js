import React from "react";
import { SvgXml } from "react-native-svg";

const LocationSVG = ({ color, size }) => {
  const svgMarkup = `<svg width=${size} height=${size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2086 7.08333C9.40441 7.08333 8.75024 7.7375 8.75024 8.5425C8.75024 9.34666 9.40441 10 10.2086 10C11.0127 10 11.6669 9.34666 11.6669 8.5425C11.6669 7.7375 11.0127 7.08333 10.2086 7.08333ZM10.2086 11.25C8.71524 11.25 7.50024 10.0358 7.50024 8.5425C7.50024 7.04833 8.71524 5.83333 10.2086 5.83333C11.7019 5.83333 12.9169 7.04833 12.9169 8.5425C12.9169 10.0358 11.7019 11.25 10.2086 11.25Z" fill=${color}/>
  <mask id="mask0_26_266" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="1" width="15" height="17">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33325 1.66666H17.0828V17.9167H3.33325V1.66666Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_26_266)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2078 2.91666C7.1061 2.91666 4.58276 5.46416 4.58276 8.59416C4.58276 12.5767 9.26943 16.4567 10.2078 16.6633C11.1461 16.4558 15.8328 12.5758 15.8328 8.59416C15.8328 5.46416 13.3094 2.91666 10.2078 2.91666ZM10.2078 17.9167C8.71276 17.9167 3.33276 13.29 3.33276 8.59416C3.33276 4.77416 6.41693 1.66666 10.2078 1.66666C13.9986 1.66666 17.0828 4.77416 17.0828 8.59416C17.0828 13.29 11.7028 17.9167 10.2078 17.9167Z" fill=${color}/>
  </g>
</svg>`;

  return <SvgXml xml={svgMarkup} fill={color} size={size} />;
};

export default LocationSVG;
