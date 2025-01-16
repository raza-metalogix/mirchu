import { View, StyleSheet } from "react-native"
import Btn from "../../../components/Btns"
import colors from "../../../utilities/color"
const PurchaseBtn = () => {
	return (
		<View style={_styles.container}>
			<Btn
				text="Buy now"
				color={colors.secondary}
				textColor="white"
			/>
		</View>
	);
}

const _styles = StyleSheet.create({
	container: {
		width: "100%",
		marginTop: 50,
	},
	btn: {
		width: "100%",
		backgroundColor: colors.secondary
	}
})

export default PurchaseBtn
