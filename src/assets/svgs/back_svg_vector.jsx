import {Svg, Path, G} from "react-native-svg"
const BackSvgVector=({color, styles})=>(
    <Svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill={color || "#000000"}
    style={styles}
    >
    <G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
    <G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></G>
    <G id="SVGRepo_iconCarrier">
    <Path 
    fill="#000000"
    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z">
    </Path>
    <Path 
    fill={color || "#000000"}
    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z">
    </Path>
    </G>
    </Svg>
);
export default BackSvgVector;
