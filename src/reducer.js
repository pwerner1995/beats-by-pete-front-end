
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
    artistSearchResults: [],
    albumSearchResults: [],
    songSearchResults: [],
    player: false,
    playing: false,
    signedIn: true,
    users: [],
    user: {}


}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "SET_ARTISTS":
      return {...prevState, artists: [...prevState.artists, [...action.payload.artists]]}
    case "SET_ALBUMS":
      return {...prevState, albums: [...prevState.albums, action.payload.albums]}
    case "SET_SONGS":
      return {...prevState, songs: [...prevState.songs, action.payload.songs]}
    case "SET_USERS":
      return {...prevState, users: [...prevState.users, action.payload.users]}
    case "SET_USER":
      return {...prevState, user: action.payload.user}
    case "SET_PLAYLIST":
        return {...prevState, playlist: [...prevState.playlist, action.payload.playlist]} 
    case "SET_PLAYING_BOOL":
        return {...prevState, playing: !prevState.playing }
    case "SHOW_PLAYER":
        return {...prevState, player: !prevState.player }
    case "RESET_PLAYLIST":
        return {...prevState, playlist: [] }
    case "SELECT_ALBUM":
        return {...prevState, selectedAlbum: action.payload}
    case "SELECT_ARTIST":
        return {...prevState, selectedArtist: action.payload}
    case "SELECT_SONG":
        return {...prevState, selectedSong: action.payload}
    case "OPEN_SEARCH":
        return {...prevState, search: !prevState.search}
    case "SET_ARTIST_RESULTS":
        return {...prevState, artistSearchResults: [...prevState.artistSearchResults, action.payload.artistSearchResults] }
    case "SET_ALBUM_RESULTS":
        return {...prevState, albumSearchResults: [...prevState.albumSearchResults, action.payload.albumSearchResults] }
    case "SET_SONG_RESULTS":
        return {...prevState, songSearchResults: [...prevState.songSearchResults, action.payload.songSearchResults] }
    case "RESET_ARTIST_SEARCH":
        return {...prevState, artistSearchResults: [] }
    case "RESET_ALBUM_SEARCH":
        return {...prevState, albumSearchResults: [] }
    case "RESET_SONG_SEARCH":
        return {...prevState, songSearchResults: [] }
    case "SIGN_IN_USER":
        return {...prevState, signedIn: true }
    default: 
      return prevState
  }
}


export default reducer