import { useContext, useEffect, useRef } from "react";
import { Text, StyleSheet, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { OPTContext, UpdateContext } from "./OPTSection";
const OPTForm = ({ value, }) => {
	const ref = useRef(null)
	const val = useContext(OPTContext)
	const updateVal = useContext(UpdateContext)
	return (
		<>
			<TextInput
				style={_styles.inputStyle}
				ref={ref}
				value={val[value]}
				onChangeText={txt => updateVal(val.map((el, index) =>
					index == value ? txt : el
				))}
				maxLength={1}
				autoCapitalize='none'
				keyboardType="phone-pad"
			/>
			<TouchableWithoutFeedback
				onPress={() => ref.current.focus()}
			>
				<View style={_styles.container}>
					<Text>
						{val[value]}
					</Text>
				</View>
			</TouchableWithoutFeedback>
		</>
	);
}

const _styles = StyleSheet.create({
	container: {
		width: 50,
		height: 50,
		backgroundColor: "#f2f2f2",
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center"
	},
	inputStyle: {
		position: "absolute",
		zIndex: -1,
		opacity: 0,
		width: "100%",
		height: "100%"
	}
})

export default OPTForm
