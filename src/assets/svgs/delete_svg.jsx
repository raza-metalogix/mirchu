import {Path, Svg, G } from "react-native-svg"

const DeleteSvg = ({color, style}) => (
    <Svg
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill={color || "#000000"}
    style={style}
    >
    <G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
    <G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></G>
    <G id="SVGRepo_iconCarrier">
    <G id="layer1">
    <Path
    d="M 8 0 L 7 1 L 7 2 L 2 2 L 2 3 L 3 3 L 3 18 L 5 20 L 14 20 L 16 18 L 16 3 L 17 3 L 17 2 L 12 2 L 12 1 L 11 0 L 8 0 z M 8.4140625 1 L 10.585938 1 L 11 1.4140625 L 11 2 L 8 2 L 8 1.4140625 L 8.4140625 1 z M 4 3 L 15 3 L 15 17.585938 L 13.585938 19 L 5.4140625 19 L 4 17.585938 L 4 3 z M 6 5 L 6 17 L 7 17 L 7 5 L 6 5 z M 9 5 L 9 17 L 10 17 L 10 5 L 9 5 z M 12 5 L 12 17 L 13 17 L 13 5 L 12 5 z "
    fill="#000000" strokeWidth="0px">
    </Path>
    </G>
    </G>
    </Svg>
)
export default DeleteSvg
