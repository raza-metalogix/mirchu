import {
	View,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	TextInput,
	Text,
} from "react-native"
import ChavronSvg from "../../../assets/svgs/ChevronSvg"
import { useState } from "react"
import colors from "../../../utilities/color"
import SearchSvg from "../../../assets/svgs/SearchSvg"
import CartSvg from "../../../assets/svgs/CartSvg"
import ShareSvg from "../../../assets/svgs/ShareSvg"

const TopHeader = ({ handlePress }) => {
	const [val, setVal] = useState("")
	return (
		<View style={_styles.container}>

			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<TouchableOpacity onPress={handlePress}>
					<ChavronSvg styles={_styles.svg} />
				</TouchableOpacity>

				<View style={_styles.inputContainer}>
					<SearchSvg size="15px" style={{ opacity: 0.7 }} />
					<TextInput
						value={val}
						onChangeText={text => setVal(text)}
						placeholder="Search more items"
						style={_styles.input}
					/>
				</View>
			</View>

			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					marginLeft: 10,
					flex: 1

				}}
			>
				<TouchableOpacity>
					<ShareSvg
						style={{
							width: 33,
							height: 33,
							opacity: 0.8
						}}
					/>
				</TouchableOpacity>

				<TouchableOpacity style={_styles.cartContainer}>
					<CartSvg
						color="black"
						style={{
							width: 30,
							height: 30,
							opacity: 0.8,
						}}
					/>

					<View style={_styles.cartCount}>
						<Text
							style={{
								color: "white",
								fontSize: 10,
							}}
						>
							12
						</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						width: 33,
						justifyContent: "center",
					}}
				>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "800",
							color: "black",
							letterSpacing: -1,
							textAlign: "center"

						}}
					>. . .</Text>
				</TouchableOpacity>
			</View>

		</View>
	);
}

const _styles = StyleSheet.create({
	container: {
		width: Dimensions.get("screen").width,
		height: 65,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		backgroundColor: "white"
	},
	svg: {
		width: 20,
		height: 20
	},
	inputContainer: {
		marginLeft: 10,
		width: 210,
		borderWidth: 1,
		borderColor: colors.primary,
		borderRadius: 10,
		height: 40,
		paddingHorizontal: 12,
		flexDirection: "row",
		alignItems: "center",
	},
	input: {
		marginLeft: 5,
		width: "100%",
		height: "100%",
		color: "black",
	},
	cartContainer: {
		position: "relative"
	},
	cartCount: {
		position: "absolute",
		top: -5,
		right: -10,
		backgroundColor: colors.secondary,
		borderRadius: 30,
		width: 20,
		height: 20,
		alignItems: "center",
		justifyContent: "center"
	}
})

export default TopHeader
