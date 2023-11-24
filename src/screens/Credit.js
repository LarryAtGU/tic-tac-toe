import { View,StyleSheet } from "react-native";
import TButton from "../components/TButton";
import Title from "../components/Title";
import Message from "../components/Message";
import color from "../constants/color";
export default Credit = function ({navigation}) {
    const msg =  "In the realm of X's and O's, upon the grid they go,"+
"\nWhere two contenders face off, in tic-tac-toe."+
"\nA pencil mark, a battle stark, lines cross like ancient runes,"+
"\nEach player seeks, with tactic sleek, to align their threes and twos."+
"\n\nFirst goes X, with hopes to vex, in the corner she resides,"+
"\nThen O's response, a parry, a taunt, beside the X she slides."+
"\nThe square becomes a battleground, where silent warriors clash,"+
"\nWith every mark, they leave their spark, in this timeless match."+
"\n\nA diagonal attempt, an intercept, the X's make their claim,"+
"\nBut O is shrewd, not easily subdued, and blocks the path to fame."+
"\nThey dance in turns, the board it churns with symbols old as time,"+
"\nA line unbroken, a token, a sign, of a strategy sublime."
    return (
        <View style={styles.container}>
            <Title>Credits</Title>
            <Message>{msg}</Message>
            <View style={styles.buttonContainer}>
                <TButton title='Back' process={()=>{navigation.goBack()}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20,
        backgroundColor:color.screenBackGroundColor,
        justifyContent:'space-around',
        flexDirection:'column',
        alignItems:'center'
    }, 
    buttonContainer: {
        flexDirection:'row',
        width:'90%',
        justifyContent:'space-around'
    }    

})