import Board from "../components/Board";
import { View,StyleSheet,Text,Alert } from "react-native";
import { useState,useEffect } from "react";
import TButton from "../components/TButton";
import Title from "../components/Title";
import color from "../constants/color";
import Label from "../components/Label";
import { loadData,saveData } from "../datamodel/savedata";
import { getBoard,playPos,newGame,getGameStep, 
    moveBackward,moveForward,getBoardStep,
getCurGame,setCurGame } from "../datamodel/game";
import { setGames,getGames } from "../datamodel/games";
let end = false
export default Home = function ({navigation}) {
    const [board, setBoard] = useState(getBoard().moves)
    const [gameStep, setGameStep] = useState(0)
    const [boardStep, setBoardStep] = useState(0)
    const [label,setLabel] = useState(getBoard().label)
    const [pos, setPos] = useState(getBoard().pos || [])

    const confirmSave = () =>
    Alert.alert('Save Game', 'Are you sure to save the game?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'Save and start a new game', onPress: () => realSave()},
    ]);
    const showMessage = (title, msg) => Alert.alert(title, msg, [
        {
          text: 'OK',
        }
      ]);
  
    useEffect(()=>{
        const load = async () => {
            try{
                const data = await loadData()
                setGames(data)    
            }catch(e){
                console.log('error loadData in Home:',e)
            }
        }
        load()
    },[])

    const saveGame = () => {
        confirmSave();
    }
    const realSave = () => {
        const curGame = getCurGame()
        const games=getGames()
        games.push(curGame)
        saveData(games)
        setGames(games)
        startNewGame()
        showMessage("Save Game","Your game is saved!!!")
    }
    const updateBoard = () => {
        const stat = getBoard()
        end = stat.end
        setLabel(stat.label)
        setBoard(stat.moves)
        setPos(stat.pos || [])
        setGameStep(getGameStep())
        setBoardStep(getBoardStep())
    }
    const playGame = (row,col) => {
        if(end) return
        if(playPos(row,col)) {
            updateBoard()
        }
    }
    const startNewGame = () => {
        newGame();
        updateBoard();
    }
    const loadGame = (id) => {
        const gms = getGames()
        const gm = gms.filter(g => g.id ===id)[0]
        setCurGame(gm)
        updateBoard()
    }
    const backWard = () => {
        if(boardStep>0) {
            moveBackward();
            updateBoard();
        }
    }
    const forWard = () => {
        if(boardStep<gameStep){
            moveForward();
            updateBoard();
        }
    }
    return (
        <View style={styles.container}>
            <Title>Tic Tac Toe</Title>

            <View style={styles.buttonContainer}>
                <TButton title='<' width={40} process={backWard} disable={boardStep===0}/>
                <TButton title='New Game' width={150} process={startNewGame} disable={gameStep===0}/>
                <TButton title='>' width = {40} process={forWard} disable={boardStep>=gameStep}/>
            </View>
            <View>
            <Label end={end}>{label}</Label>
            <Board board={board} pos={pos} pressBoard={playGame}/>
            </View>
            <View style={styles.buttonContainer}>
                <TButton title='Load' process={()=>{navigation.navigate('LoadPage',{load:loadGame})}}/>
                <TButton title='Save' process={saveGame} disable={!end}/>
                <TButton title='Rules' process={()=>{navigation.navigate('Rules')}}/>
                <TButton title='Credits' process={()=>{navigation.navigate('Credits')}}/>
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