import { View,Text } from "react-native"

import { GameRow } from "./GameRow"
export const LoadView = ({games,load,del}) => {
    const loadGame = (id) => {
        load(id)
    }
    const deleteGame = (id) => {
        del(id)
    }
    return (
        <View>
            {games.length>0 ? games.map((gm,i)=><GameRow game = {gm} key = {gm.id} seq={i+1} 
            load={loadGame} del={deleteGame}
            />) : <Text style={{color:'white'}}>No Game</Text>}
        </View>
    )
}