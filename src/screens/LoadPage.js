import { View,StyleSheet,Alert } from "react-native";
import TButton from "../components/TButton";
import Title from "../components/Title";
import Message from "../components/Message";
import color from "../constants/color";
import { getGames,setGames } from "../datamodel/games";
import { useState } from "react";
import { LoadView } from "../components/LoadView";
import { saveData } from "../datamodel/savedata";

export default LoadPage = function ({route,navigation}) {
    const [games, setNewGames] = useState(getGames()) 
    const load = route.params.load
    const confirmDelete = (id) =>  Alert.alert('Delete Game', 
    'Are you sure to delete the game?', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {text: 'Delete', onPress: () => realDelete(id)},
  ]);
    const realDelete = (id) => {
        const newGames = games.filter(g=>g.id!==id)
        setNewGames(newGames)
        setGames(newGames)
        saveData(newGames)
    }    
    const delGame = (id) => {
        confirmDelete(id)
    }
    const loadGame = (id) => {
        navigation.navigate('Home')
        load(id)
    }
    return (
        <View style={styles.container}>
            <Title>Load Game</Title>
            <Message><LoadView games={games} load={loadGame} del={delGame}/></Message>
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