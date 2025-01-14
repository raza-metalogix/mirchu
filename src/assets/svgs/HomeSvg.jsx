import { Svg, Path, G } from "react-native-svg"
import colors from "../../utilities/color";
const HomeSvg = ({ foc }) => (
	<Svg
		style={{
			width: 20,
			height: 20
		}}
		viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
		<G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
		<G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></G>
		<G id="SVGRepo_iconCarrier">
			<Path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill={foc ? colors.primary : "#000000"}>
			</Path>
		</G>
	</Svg >
);

export default HomeSvg
