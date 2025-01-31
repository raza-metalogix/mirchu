import { Path, Svg, G } from "react-native-svg"
const PersonSvg = ({ styles, color }) => (
    <Svg
    viewBox="0 0 24 24" style={styles} fill="none" xmlns="http://www.w3.org/2000/svg"
    stroke={color || "#000000"} strokeWidth="0.00024000000000000003">
    <G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
    <G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></G>
    <G id="SVGRepo_iconCarrier">
    <Path fillRule="evenodd" clipRule="evenodd"
    d="M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 18C17.8 17.29 14.7 16 12 16C9.31 16 6.23 17.28 6 18H18ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z"
    fill={color || "#000000"}>
    </Path>
    </G>
    </Svg>
);
export default PersonSvg
