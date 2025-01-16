import { Text } from "react-native";
import colors from "../utilities/color";
import fonts from "../utilities/fonts";
const TabLabel = ({ txt, foc }) => {
	return (
		<Text style={{
			color: foc ? colors.primary : colors.textSecondary,
			fontFamily: fonts.poppins_medium,
			opacity: 0.6
		}}
		>
			{txt}
		</Text>
	);
}
export default TabLabel
