import { View,StyleSheet, Text} from "react-native";
import color from "../constants/color";

export default Title = function ({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        width:'90%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:color.boardColor,
        backgroundColor:color.titleBackGroundColor,
        borderRadius:5
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:color.messageTextColor
    }
})
