import { useState } from "react";
import { View, StyleSheet } from "react-native"
import { OtpInput } from "react-native-otp-entry";
import Btns from "../../../components/Btns";
import colors from "../../../utilities/color";


const OPTSection = ({ handlePress }) => {
	const [value, setValue] = useState([0])
	const handlePressed = () => {
		handlePress()
		return value.length == 6 && console.log(value)
	};
	return (
		<>
			<View style={_styles.container}>
				<OtpInput
					numberOfDigits={6}
					type="numeric"
					onTextChange={(text) => setValue(text)}
				/>
			</View>

			<View style={{ paddingHorizontal: 30 }}>
				<Btns
					handlePress={handlePressed}
					text={"VERIFY"}
					textColor="white"
					color={colors.primary}
				/>
			</View>
		</>

	);
}
const _styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 30,
		marginTop: 30,
		marginBottom: 30,
	},
})

export default OPTSection
