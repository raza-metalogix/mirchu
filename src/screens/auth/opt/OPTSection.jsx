import { createContext, useRef, useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import OPTForm from "./OPTForm";
export const OPTContext = createContext()
export const UpdateContext = createContext()
const OPTSection = ({ handlePress }) => {
	const [value, setValue] = useState(["", "", "", "", "", ""])
	return (
		<OPTContext.Provider value={value}>
			<UpdateContext.Provider value={setValue}>
				<View style={_styles.container}>
					{value.map((_, index) =>
						<OPTForm
							key={index}
							value={index}
						/>)}
				</View>
			</UpdateContext.Provider>
		</OPTContext.Provider>

	);
}
const _styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 30,
		marginVertical: 30,
	},
	textInput: {
		position: "absolute",
		opacity: 0,
	}
})

export default OPTSection
