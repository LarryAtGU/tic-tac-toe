import { View,Text, StyleSheet,Button } from "react-native"
import color from "../constants/color"
import SButton from "./SButton"

const Pair = ({head,val}) => {
        return (
            <Text style={styles.text}>
                <Text style={{fontWeight:'bold'}}>{head}</Text>: {val}
            </Text>
    )
}
export const GameRow = ({game,seq,load,del}) => {
    const loadGame = () => load(game.id)
    const delGame = () => del(game.id)
    return (
        <View style={styles.container} key={seq}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>({seq})</Text>             
                <Pair head='Result' val ={game.label}></Pair>
                <Pair head='Steps' val ={game.moves.length}></Pair>
                <Pair head='ID' val ={game.id}></Pair>
            </View>
            <View style={{flexDirection:'row'}}>
                <Pair head='       Date' val ={game.date}></Pair>
                <Pair head='Time' val ={game.time}></Pair>
            </View>
            <View style={styles.buttonContainer}>
                <SButton title = 'Load' process={loadGame}/>
                <SButton title = 'Delete' process={delGame}/>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        width : 300,
        borderWidth:1,
        backgroundColor: color.screenBackGroundColor,
        borderRadius:5,
        margin:3
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        paddingBottom:3
    },
    text: {
        fontSize:15,
        padding:3
    }

})