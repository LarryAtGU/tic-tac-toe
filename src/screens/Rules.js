import { View,StyleSheet } from "react-native";
import TButton from "../components/TButton";
import Title from "../components/Title";
import Message from "../components/Message";
import color from "../constants/color";
export default Rules = function ({navigation}) {
    const rules = "You probably already know how to play Tic-Tac-Toe. It's a really simple game, right? That's what most people think. \n\nBut if you really wrap your brain around it, you'll discover that Tic-Tac-Toe isn't quite as simple as you think"+
    "\n\nRules for Tic-Tac-Toe"+
    "\n\n1. The game is played on a grid that's 3 squares by 3 squares."+
    "\n\n2. You are X , your friend (or the computer in this case) is O . Players take turns putting their marks in empty squares."+
    "\n\n3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner."+
    "\n\n4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie."+
    "\n\n5. Have fun."
    return (
        <View style={styles.container}>
            <Title>Rules</Title>
            <Message>{rules}</Message>
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