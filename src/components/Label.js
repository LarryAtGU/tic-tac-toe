import { View,StyleSheet, Text} from "react-native";
import color from "../constants/color";
import TButton from "./TButton";
export default Label = function ({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 40,
        width:300,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:color.boardColor,
        backgroundColor:color.messagBackgroundColor,

        borderRadius:5,
        marginBottom:10
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:color.messageTextColor
    }
})
