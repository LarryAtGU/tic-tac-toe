import { StyleSheet,View,Text } from "react-native";
import color from "../constants/color";

export default TButton = function ({title,process,width=0,disable=false}) {
    return (
        <View style={[styles.box,{width:width||styles.box.width, 
        backgroundColor:disable?color.buttonDisableBackGroundColor:color.buttonBackGroundColor}]} >
        <Text style={styles.text} onPress={disable ? ()=>{} : process}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        width:75,
        height:40,
        backgroundColor:color.buttonBackGroundColor,
        borderWidth:2,
        borderColor:color.boardColor,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:15,
        fontWeight:'bold',
        color:color.messageTextColor
    }
})