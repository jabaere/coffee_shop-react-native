import React from "react";
import { SvgXml } from "react-native-svg";

const DeliveryIcon = ({ color }) => {
  const svgMarkup = `<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.2857 14.7282C23.6556 14.7081 23.9495 14.4023 23.9495 14.027C23.9495 12.0037 22.3254 10.4188 20.2521 10.4188H19.5669L18.7294 6.44365C19.5375 6.09256 20.1044 5.28621 20.1044 4.34951C20.1044 3.09129 19.082 2.06763 17.8252 2.06763H14.5855C14.1976 2.06763 13.8832 2.38244 13.8832 2.77075V3.64638H12.1569C11.769 3.64638 11.4546 3.96119 11.4546 4.34951C11.4546 4.73782 11.769 5.05263 12.1569 5.05263H13.8832V5.92826C13.8832 6.31657 14.1976 6.63139 14.5855 6.63139H14.8973C14.3158 7.319 13.9641 8.20723 13.9641 9.17666V13.1779C13.9641 13.1984 13.9475 13.215 13.927 13.215H11.0901C11.0738 13.215 11.0591 13.2041 11.0545 13.1884L10.2897 10.6008C10.9061 10.436 11.3615 9.87228 11.3615 9.20389C11.3615 7.61684 10.072 6.32571 8.48688 6.32571H2.15935C0.968721 6.32567 0 7.29556 0 8.48769C0 9.57753 0.809673 10.4811 1.85832 10.6283C0.745876 11.6246 0.0443907 13.0719 0.0443907 14.6804V16.8694C0.0443907 17.2577 0.358829 17.5725 0.746673 17.5725H1.35432C1.68141 19.2056 3.1246 20.4398 4.85059 20.4398C6.57658 20.4398 8.01977 19.2056 8.34686 17.5725H16.9377C17.2648 19.2056 18.7079 20.4398 20.4339 20.4398C22.4002 20.4398 24 18.8381 24 16.8694C24 16.0667 23.734 15.3252 23.2857 14.7282ZM22.43 13.3239H20.849C20.7127 13.308 20.5744 13.2989 20.434 13.2989C20.1823 13.2989 19.9367 13.3255 19.6996 13.3754V11.825H20.2521C21.2806 11.825 22.131 12.4441 22.43 13.3239ZM15.2877 3.47383H17.8252C18.3075 3.47383 18.6998 3.86665 18.6998 4.34946C18.6998 4.83227 18.3075 5.22509 17.8252 5.22509H15.2877V3.47383ZM11.0902 14.6212H13.9271C14.722 14.6212 15.3687 13.9738 15.3687 13.1778V9.17661C15.3687 7.96807 16.2165 6.95398 17.3479 6.69931L18.2951 11.1951V14.0143C17.6078 14.5318 17.1129 15.2917 16.9377 16.1662H9.95566C9.62768 13.6435 7.54445 11.7561 4.94429 11.7561C3.78484 11.7561 2.74393 12.1348 1.92268 12.7859C2.60105 11.516 3.93849 10.6498 5.47468 10.6498H8.83966L9.70788 13.5874C9.88769 14.1961 10.4561 14.6212 11.0902 14.6212ZM1.506 16.1662C1.62872 15.4182 1.94827 14.7434 2.43694 14.2206C3.07477 13.5381 3.96521 13.1623 4.9442 13.1623C6.75554 13.1623 8.21884 14.4352 8.533 16.1662H1.506V16.1662ZM2.15935 9.2435C1.74314 9.2435 1.40452 8.90445 1.40452 8.48769C1.40452 8.07092 1.74314 7.73187 2.15935 7.73187H8.48688C9.29753 7.73187 9.95702 8.39215 9.95702 9.2038C9.95102 9.23272 9.90471 9.25184 9.8185 9.24341C9.23425 9.24341 9.40127 9.24341 9.27958 9.24341C8.44047 9.2435 2.16343 9.2435 2.15935 9.2435ZM4.85059 19.0335C3.90451 19.0335 3.09901 18.4216 2.80679 17.5725H6.89439C6.60217 18.4216 5.79667 19.0335 4.85059 19.0335ZM20.434 19.0335C19.2421 19.0335 18.2724 18.0627 18.2724 16.8693C18.2724 15.676 19.2421 14.7052 20.434 14.7052C21.6259 14.7052 22.5955 15.676 22.5955 16.8693C22.5955 18.0627 21.6258 19.0335 20.434 19.0335Z" fill=${color}/>
  <path d="M20.4341 17.5772C20.8245 17.5772 21.141 17.2603 21.141 16.8694C21.141 16.4785 20.8245 16.1616 20.4341 16.1616C20.0437 16.1616 19.7272 16.4785 19.7272 16.8694C19.7272 17.2603 20.0437 17.5772 20.4341 17.5772Z" fill=${color}/>
  <path d="M0.731702 4.28748H7.03021C7.41806 4.28748 7.7325 3.97267 7.7325 3.58435C7.7325 3.19604 7.41806 2.88123 7.03021 2.88123H0.731702C0.343857 2.88123 0.0294189 3.19604 0.0294189 3.58435C0.0294189 3.97267 0.343857 4.28748 0.731702 4.28748Z" fill=${color}/>
  <path d="M3.06471 1.40625H9.4175C9.80535 1.40625 10.1198 1.09144 10.1198 0.703126C10.1198 0.314813 9.80535 0 9.4175 0H3.06471C2.67686 0 2.36243 0.314813 2.36243 0.703126C2.36243 1.09144 2.67686 1.40625 3.06471 1.40625Z" fill=${color}/>
</svg>`;

  return <SvgXml xml={svgMarkup} fill={color} />;
};

export default DeliveryIcon;