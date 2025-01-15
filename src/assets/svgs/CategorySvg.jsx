import { Path, Svg, G } from 'react-native-svg'
const CategorySvg = ({ color }) => (
	<Svg
		viewBox="0 0 24 24"
		style={{ width: 20, height: 20 }}
		fill="none" xmlns="http://www.w3.org/2000/svg">
		<G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
		<G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></G>
		<G id="SVGRepo_iconCarrier">
			<Path
				d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
				stroke={color || "#000000"}
				strokeWidth="2" strokeMiterlimit="20" strokeLinecap="round" strokeLinejoin="round">
			</Path>
			<Path
				d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
				stroke={color || "#000000"} strokeWidth="2" strokeMiterlimit="20" strokeLinecap="round"
				strokeLinejoin="round">
			</Path>
			<Path
				d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
				stroke={color || "#000000"} strokeWidth="2" strokeMiterlimit="20" strokeLinecap="round" strokeLinejoin="round">
			</Path>
			<Path
				d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
				stroke={color || "#000000"} strokeWidth="2" strokeMiterlimit="20" strokeLinecap="round" strokeLinejoin="round">
			</Path>
		</G>
	</Svg>
);
export default CategorySvg
