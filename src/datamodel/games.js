let games = []
export const getGames = () => {
    return games
}

export const setGames = (data) => {
    const str = JSON.stringify(data)
    games = JSON.parse(str)
}
export const getNewGameID = () => {
    let id = 1
    games.forEach(g=>id = g.id && g.id>id ? g.id : id)
    return id+1
}