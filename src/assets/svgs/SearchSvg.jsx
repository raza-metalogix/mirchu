import { Svg, Path, G } from "react-native-svg"
const SearchSvg = ({  size, color, style  }) => (
    <Svg
    height={size || "20px"}
    width={size || "20px"}
    style={style}
    version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-14.65 -14.65 517.70 517.70" xmlSpace="preserve"
    stroke={color || "#000000"} strokeWidth="24.9084">
    <G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
    <G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></G>
    <G id="SVGRepo_iconCarrier">
    <G>
    <G>
    <Path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z">
    </Path>
    </G>
    </G>
    </G>
    </Svg>
)
export default SearchSvg
