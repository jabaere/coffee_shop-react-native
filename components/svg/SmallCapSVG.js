import React from "react";
import { SvgXml } from "react-native-svg";

const SmallCapSVG = ({ color }) => {
  const svgMarkup = `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_29_26)">
    <path d="M11.0703 1.82812H10.6895V0.380855C10.6895 0.275458 10.6458 0.174759 10.5688 0.102726C10.4918 0.0307179 10.3886 -0.00612386 10.2833 0.00083317L2.66607 0.508646C2.46601 0.521976 2.31055 0.688157 2.31055 0.888667V1.82812H1.92969C1.71935 1.82812 1.54883 1.99864 1.54883 2.20898V3.73242C1.54883 3.94275 1.71935 4.11328 1.92969 4.11328H2.34178L3.07364 12.6517C3.09055 12.8487 3.25538 13 3.45312 13H9.54688C9.74462 13 9.90945 12.8487 9.92634 12.6517L10.6582 4.11328H11.0703C11.2806 4.11328 11.4512 3.94275 11.4512 3.73242V2.20898C11.4512 1.99864 11.2806 1.82812 11.0703 1.82812ZM3.07227 1.24497L9.92773 0.787942V1.82812H3.07227V1.24497ZM9.19725 12.2383H3.80273L3.73745 11.4766H9.26255L9.19725 12.2383ZM9.32783 10.7148H3.67217L3.2369 5.63671H9.76313L9.32783 10.7148ZM9.82838 4.87499H3.17159L3.10629 4.11328H9.89366L9.82838 4.87499ZM10.6895 3.35156H2.31055V2.58984H10.6895V3.35156Z" fill=${color} fill-opacity="0.8"/>
  </g>
  <defs>
    <clipPath id="clip0_29_26">
      <rect width="13" height="13" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

  return <SvgXml xml={svgMarkup} fill={color} />;
};

export default SmallCapSVG;
