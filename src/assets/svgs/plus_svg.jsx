import {Path, Svg, G} from "react-native-svg"

const PlusSvg =  ({color, style}) => (
    <Svg
	style={style}
	viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<G 
	    id="SVGRepo_bgCarrier" strokeWidth="0">
	</G>
	<G 
	    id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
	</G>
	<G 
	    id="SVGRepo_iconCarrier">
	    <Path
		d="M6 12H18M12 6V18" stroke={color || "#000000" } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
	    </Path>
	</G>
    </Svg>
);

export default PlusSvg
