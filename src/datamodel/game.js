import { getNewGameID } from "./games"

const moves = []
let boardStep = 0

const winCond = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

const normalTitle = () => boardStep%2 === 0 ? 'X to play' : 'O to play' 

const checkStatus = () => {
    const stat = {label:normalTitle(),end:false}
    if(boardStep<5) return stat
    const xmoves = moves.filter((_,i)=>(i%2===0)&&i<boardStep)
        .map(m=>m[0]*3+m[1])

    const omoves = moves.filter((_,i)=>i%2===1 && i<boardStep)
        .map(m=>m[0]*3+m[1])
    const xwin = winCond.filter(cd=>cd.every(i=>xmoves.includes(i)))
    if(xwin.length>0) return {label:'X wins',pos:xwin.flatMap(m=>m),end:true}
    const owin = winCond.filter(cd=>cd.every(i=>omoves.includes(i)))
    if(owin.length>0) return {label:'O wins',pos:owin.flatMap(m=>m),end:true}
    if(boardStep===9) return {label:'Tie',end:true}
    return stat
}

export const playPos = (row,col) => {
    if(row<0||row>2||col<0||col>2) return false; // invalid move
    for(let i = 0;i<boardStep;++i)
        if(moves[i][0]===row&&moves[i][1]===col) return false; // already played
    moves.splice(boardStep,moves.length - boardStep)
    moves.push([row,col])
    boardStep = moves.length
    return true;
}
export const getBoard = () => {
    const ret = Array(9).fill('')
    const steps = Math.min(boardStep,moves.length)
    for(let i = 0 ; i<steps; ++i) {
        const pos = moves[i][0]*3+moves[i][1];
        ret[pos] = i%2 === 0 ? 'X' : 'O'
    }
    const status = checkStatus()
    return {moves:ret, ...status}
}

export const getGameStep = () => {
    return moves.length
}
export const moveForward = () => {
    if (boardStep<moves.length) {
        boardStep++;
        return true;
    }
    return false;
}
export const moveBackward = () => {
    if (boardStep>0){ 
        boardStep--;
        return true;
    }
    return false
}
export const getBoardStep = () => {
    return boardStep
}
export const newGame = () => {
    moves.splice(0,moves.length)
    boardStep=0;
}
export const getCurGame = () => {
    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString() 
    const id = getNewGameID()
    return {moves,date,time,...checkStatus(),id}
}
export const setCurGame = (game) => {
    newGame()
    game.moves.forEach(m=>moves.push(m))
    boardStep = moves.length
}