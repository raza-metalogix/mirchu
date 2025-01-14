import { Text } from "react-native";
import colors from "../utilities/color";
const TabLabel = ({ txt, foc }) => {
	return (
		<Text style={{
			color: foc ? colors.primary : colors.textSecondary,
		}}
		>
			{txt}
		</Text>
	);
}
export default TabLabel
