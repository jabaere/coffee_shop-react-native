import React from "react";
import { SvgXml } from "react-native-svg";

const UserSVG = ({ color }) => {
  const svgMarkup = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="mask0_26_276" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="12" width="14" height="7">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33325 12.0801H16.5332V18.2251H3.33325V12.0801Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_26_276)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.93408 13.3301C6.38325 13.3301 4.58325 13.9401 4.58325 15.1442C4.58325 16.3592 6.38325 16.9751 9.93408 16.9751C13.4841 16.9751 15.2833 16.3651 15.2833 15.1609C15.2833 13.9459 13.4841 13.3301 9.93408 13.3301ZM9.93409 18.2251C8.30159 18.2251 3.33325 18.2251 3.33325 15.1442C3.33325 12.3976 7.10075 12.0801 9.93409 12.0801C11.5666 12.0801 16.5333 12.0801 16.5333 15.1609C16.5333 17.9076 12.7666 18.2251 9.93409 18.2251Z" fill=${color}/>
  </g>
  <mask id="mask1_26_276" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="5" y="1" width="10" height="10">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50806 1.66675H14.3581V10.5156H5.50806V1.66675Z" fill="white"/>
  </mask>
  <g mask="url(#mask1_26_276)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.93392 2.85641C8.14975 2.85641 6.69809 4.30724 6.69809 6.09141C6.69225 7.86974 8.13309 9.31974 9.90975 9.32641L9.93392 9.92141V9.32641C11.7173 9.32641 13.1681 7.87474 13.1681 6.09141C13.1681 4.30724 11.7173 2.85641 9.93392 2.85641ZM9.93392 10.5156H9.90725C7.47225 10.5081 5.49975 8.52225 5.50808 6.08891C5.50808 3.65141 7.49308 1.66641 9.93392 1.66641C12.3739 1.66641 14.3581 3.65141 14.3581 6.09141C14.3581 8.53141 12.3739 10.5156 9.93392 10.5156Z" fill=${color}/>
  </g>
</svg>`;

  return <SvgXml xml={svgMarkup} fill={color} />;
};

export default UserSVG;
