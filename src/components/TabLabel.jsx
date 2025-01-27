import { Text } from "react-native";
import colors from "../utilities/color";
import fonts from "../utilities/fonts";
const TabLabel = ({ txt, foc }) => {
    return (
	<Text style={{
	    color: foc ? colors.primary : colors.textSecondary,
		fontFamily: fonts.poppins_regular,
		opacity: 0.6,
		fontSize:10
	}}
	>
	{txt}
	</Text>
    );
}
export default TabLabel
