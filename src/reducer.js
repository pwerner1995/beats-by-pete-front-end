
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
    signedIn: false,
    users: [],
    user: {},
    reviews: [],
    topRatedAlbums: [],
    topRatedArtists: [],
    userFavs: {},
    recentRevs: [],
    signUp: false,
    userError: "",
    petesTreats: [],
    mattsSlaps: []


}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "SET_ARTISTS":
      return {...prevState, artists: action.payload.artists}
    case "SET_PETES_TREATS":
      return {...prevState, petesTreats: action.payload.treats}
    case "SET_MATTS_SLAPS":
      return {...prevState, mattsSlaps: action.payload.slaps}
    case "SET_ALBUMS":
      return {...prevState, albums: action.payload.albums}
    case "SET_TOP_ARTISTS":
      return {...prevState, topRatedArtists: action.payload.topRatedArtists}
    case "SET_TOP_ALBUMS":
      return {...prevState, topRatedAlbums: action.payload.topRatedAlbums}
    case "SET_SONGS":
      return {...prevState, songs: action.payload.songs}
    case "SET_REVIEWS":
      return {...prevState, songs: action.payload.reviews}
    case "SET_USER":
        // console.log(action.payload.user)
      return {...prevState, user: action.payload}
    case "SET_USERS":
      return {...prevState, users: action.payload.users}
    case "SET_USER_FAVS":
        // console.log(action.payload.user)
      return {...prevState, userFavs: action.payload}
    case "SET_USER_REVIEWS":
        // console.log(action.payload.recent_reviews)
      return {...prevState, recentRevs: action.payload}
    case "SET_PLAYLIST":
        return {...prevState, playlist: [action.payload.playlist]} 
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
    case "CLOSE_SEARCH":
        return {...prevState, search: false}
    case "SET_ARTIST_RESULTS":
        return {...prevState, artistSearchResults: action.payload.artistSearchResults }
    case "SET_ALBUM_RESULTS":
        return {...prevState, albumSearchResults: action.payload.albumSearchResults }
    case "SET_SONG_RESULTS":
        return {...prevState, songSearchResults: [...action.payload.songSearchResults] }
    case "RESET_ARTIST_SEARCH":
        return {...prevState, artistSearchResults: [] }
    case "RESET_ALBUM_SEARCH":
        return {...prevState, albumSearchResults: [] }
    case "RESET_SONG_SEARCH":
        return {...prevState, songSearchResults: [] }
    case "SIGN_IN_USER":
        return {...prevState, signedIn: true }
    case "SIGN_OUT":
        return {...prevState, signedIn: false }
    case "SIGN_UP":
        return {...prevState, signUp: true }
    case "SIGN_UP_FALSE":
        return {...prevState, signUp: false }
    case "CREATE_USER_ERROR":
        return {...prevState, userError: action.payload.error }
    case "RESET_USER_ERROR":
        return {...prevState, userError: "" }
    case "RESET_USER":
        return {...prevState, user: {} }
    default: 
      return prevState
  }
}


export default reducer