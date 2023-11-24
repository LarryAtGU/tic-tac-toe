import { View,StyleSheet, Text, ScrollView} from "react-native";
import color from "../constants/color";

export default Message = function ({children}) {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.text}>{children}</Text>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "75%",
        width:'90%',
        borderWidth:2,
        borderColor:color.boardColor,
        backgroundColor:color.messagBackgroundColor,
        borderRadius:5
    },
    text:{
        fontSize:16,
        color:color.messageTextColor,
        padding:5
    }
})
