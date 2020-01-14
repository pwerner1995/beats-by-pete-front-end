
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
    },
    selectedAlbum: {},
    selectedArtist: {},
    selectedSong: {},
    search: false,
    searchResults: []


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
    case "SELECT_ALBUM":
        return {...prevState, selectedAlbum: action.payload}
    case "SELECT_ARTIST":
        return {...prevState, selectedArtist: action.payload}
    case "SELECT_SONG":
        return {...prevState, selectedSong: action.payload}
    case "OPEN_SEARCH":
        return {...prevState, search: !prevState.search}
    case "FETCH_SEARCH":
        return {...prevState, searchResults: [...prevState.searchResults, action.payload.searchResults] }
    case "RESET_SEARCH":
        return {...prevState, searchResults: [] }
    default: 
      return prevState
  }
}


export default reducer