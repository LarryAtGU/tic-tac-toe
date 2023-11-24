import { Text, View, StyleSheet } from "react-native";
import color from "../constants/color";
export default Board = function({board,pressBoard,pos}){
  const play = (i) => {
      const col = i % 3
      const row = (i-col) / 3 
      pressBoard(row,col)
  }
  const getColor = (i) => pos.includes(i) ? color.chessHighLightColor : styles.chess.color
  return (
           <View style={styles.board}>
      {board.map((s,i)=>(<View style={styles.box} key={i} >
        <Text style={[styles.chess,
        {color:getColor(i)}]} onPress={()=>play(i)}>{s}</Text></View>))}  
      </View> 
    )
}
const styles = StyleSheet.create({
    board:{
      width:300,
      height:300,
      borderWidth:2,
      borderColor:color.boardColor,
      backgroundColor:color.boardBackGroundColor,
      borderRadius:10,
      flexDirection:'row',
      justifyContent:'center',
      flexWrap:'wrap',
      alignContent:'center'
    },
    box:{
      width:80,
      height:80,
      borderWidth:1,
      borderColor:color.boardColor,
      backgroundColor:color.cellBackGroundColor,
      alignItems:'center',
      justifyContent:'center'
    },
    chess:{
      width : 65,
      height: 65,
      textAlign:'center',
      marginBottom:5,
      fontSize:50,
      color:color.chessColor,
      fontWeight:'bold'
    }
  });
  
  