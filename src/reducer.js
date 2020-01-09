
const defaultState = {
  artists: [],
  albums: [],
  songs: [],
  playlist: [],
  playlistOverideStylingOpts: {
        offset : {
          left : 0
        },
        breakpoint : {
          maxWidth : 768
          }
      }
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "FETCH_ARTISTS":
      return {...prevState, artists: [...prevState.artists, action.payload.artists]}
    case "FETCH_ALBUMS":
      return {...prevState, albums: [...prevState.albums, action.payload.albums]}
    case "FETCH_SONGS":
      return {...prevState, songs: [...prevState.songs, action.payload.songs]}
    case "SET_PLAYLIST":
        return {...prevState, playlist: [...prevState.playlist, action.payload.playlist]} 
    default: 
      return prevState
  }
}


export default reducer