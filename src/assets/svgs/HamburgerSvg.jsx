import { Path, Svg, G, Defs, Rect, ClipPath } from "react-native-svg"
const HamburgerSvg = ({ styles }) => (
	<Svg
		style={styles}
		viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
		<G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></G>
		<G id="SVGRepo_iconCarrier">
			<G clipPath="url(#clip0_429_11066)">
				<Path
					d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
					stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
				</Path>
			</G>
			<Defs>
				<ClipPath id="clip0_429_11066">
					<Rect
						width="24" height="24" fill="white" transform="translate(0 0.000915527)">
					</Rect>
				</ClipPath>
			</Defs>
		</G>
	</Svg>
);
export default HamburgerSvg
