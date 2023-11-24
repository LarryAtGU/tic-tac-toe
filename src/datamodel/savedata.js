import AsyncStorage from '@react-native-async-storage/async-storage';
const key = 'tic-tac-toe'
const dummyData = {games:[]} 
export async function loadData () {
    try{
        str = await AsyncStorage.getItem(key)
        if(str != null){
            const myData = JSON.parse(str)
            return myData.games
        }
        return dummyData.games
    }catch(e){
        console.log(`fail to read data with key ${key} `,e)
        return dummyData.games
    }
}
export async function saveData (games) {
    const str = JSON.stringify({games})
    try {
        await AsyncStorage.setItem(key,str)
    }catch(e){
        console.log('fail to save data',e)
    }
}
