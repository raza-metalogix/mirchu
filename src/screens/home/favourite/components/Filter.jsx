import {View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import colors from "../../../../utilities/color"
import fonts from "../../../../utilities/fonts"
import {useState} from "react"

const context = ["All", "Milk", "Vegetable", "Fruit", "Meat"];

const Filter = ()=>{
    const [select, setSelect] = useState(0);
    return(
	<View style={{marginBottom:10,marginTop:5}}>
	    <FlatList 
		data={context}
		horizontal={true}
		showsHorizontalScrollIndicator={false}
		ItemSeparatorComponent={()=> <View style={{width:20}}/>}
		keyExtraction={(_,index)=> index.toString()}
		renderItem={({item,index})=>
		    <TouchableOpacity 
			onPress={()=> setSelect(index)}
			style={[_styles.btn,
			    select == index && {
				 backgroundColor: colors.secondary,
			    }
			]}
			>
			<Text 
			    style={[_styles.btn_txt, select == index && {color:"white"} ]}
			>{item}</Text>
		    </TouchableOpacity>
		}
	/>
	</View>
    );
}

const _styles = StyleSheet.create({
    btn:{
	paddingVertical:8,
	paddingHorizontal:25,
	alignItems:"center",
	justifyContent:"center",
	borderColor: colors.secondary,
	borderWidth:1,
	borderRadius:20,
    },
    btn_txt:{
	color:"black",
	fontFamily: fonts.poppins_medium,
	fontSize:16,
    }
})


export default Filter
