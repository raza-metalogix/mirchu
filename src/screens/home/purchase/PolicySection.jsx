import { View, Text, StyleSheet, FlatList } from "react-native"
import {
	DeliverySvg,
	RefundSvg,
	MessageSvg
} from "../../../assets/svgs/PurchaseSvgs";
import colors from "../../../utilities/color"

const context = [
	{ svg: <DeliverySvg size={25} />, text: "Cash on Delivery" },
	{ svg: <RefundSvg size={25} />, text: "Easy Return & Refund Policy" },
	{ svg: <MessageSvg size={25} />, text: "24/7 Customer Support" }
]


const PolicySection = () => {
	return (
		<View style={_styles.container}>
			<FlatList
				style={{
					backgroundColor: colors.lightDark,
					padding: 16,
					borderRadius: 5
				}}
				data={context}
				enableScroll={false}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
				keyExtraction={(_, index) => index.toString()}
				renderItem={({ item }) =>
					<View style={_styles.imgContainer}>
						{item.svg}
						<Text
							style={{
								marginLeft: 15,
								color: "black",
								fontSize: 16
							}}
						>
							{item.text}
						</Text>
					</View>
				}
			/>
		</View>
	);
}

const _styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	imgContainer: {
		marginTop: 5,
		flexDirection: "row",
		opacity: 0.6
	}
})


export default PolicySection



