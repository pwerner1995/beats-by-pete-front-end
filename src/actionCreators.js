export const  fetchArtists = () => {
    
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/artists",{
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: "SET_ARTISTS",
            payload: {artists: data}
        }))
    }
    
    

}

export const  fetchSongs = () => {
    
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/songs",{
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: "SET_SONGS",
            payload: {songs: data}
        }

        ))
        
    }

}

export const  fetchAlbums = () => {
    
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/albums",{
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: "SET_ALBUMS",
            payload: {albums: data}
        }))
    } 

}

export const  fetchUsers = () => {
    
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/users",{
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: "SET_USERS",
            payload: {users: data}
        }))
    } 

}



export function SignInUser(){
    return{
        type: "SIGN_IN_USER"
    }
}

export function SetUser(user){
    return{
        type: "SET_USER",
        payload: user
    }
}

export function showPlayer(){
    return{
        type: "SHOW_PLAYER"
    }
}
export function resetPlaylist(){
    return{
        type: "RESET_PLAYLIST"
    }
}
export const setPlaylist = (song) => {
    // showPlayer()
    // resetPlaylist()
    return (dispatch) => {
        dispatch({type: "SHOW_PLAYER"})
        dispatch({type: "RESET_PLAYLIST"})
        dispatch({
            type: "SET_PLAYLIST",
            payload: {
                playlist:{
                    img: song.album_cover,
                    name: song.title,
                    desc: song.artist_name,
                    src: song.preview
                    }
                }
        })

        
    }
}

export function playingSong(){
    return{
        type: "SET_PLAYING_BOOL"
    }
}

export function setArtist(data){
    return{
        type: "SET_ARTISTS",
        payload: {artists: data}
    }
}

export function setAlbum(data){
    return{
        type: "SET_ALBUMS",
        payload: {albums: data}
    }
}

export function setSong(data){
    return{
        type: "SET_ALBUMS",
        payload: {albums: data}
    }
}


export function selectAlbum (album){
    
    return {
        type: "SELECT_ALBUM",
        payload: album
    }
}

export function selectArtist (artist){
    return {
        type: "SELECT_ARTIST",
        payload: artist
    }
}

export function selectSong (song){
    return {
        type: "SELECT_SONG",
        payload: song
    }
}

export function openSearchForm (){
    return {
        type: "OPEN_SEARCH"
    }
}

export function closeSearchForm (){
    return {
        type: "CLOSE_SEARCH"
    }
}

export function setArtistSearchResults(results){
    return{
        type: "SET_ARTIST_RESULTS",
        payload: {
            artistSearchResults: results
        }
    }
}

export function setAlbumSearchResults(results){
    return{
        type: "SET_ALBUM_RESULTS",
        payload: {
            albumSearchResults: results
        }
    }
}

export function setSongSearchResults(results){
    return{
        type: "SET_SONG_RESULTS",
        payload: {
            songSearchResults: results
        }
    }
}

export function resetArtistSearchResults(){
    return{
        type: "RESET_ARTIST_SEARCH"
    }
}

export function resetAlbumSearchResults(){
    return{
        type: "RESET_ALBUM_SEARCH"
    }
}

export function resetSongSearchResults(){
    return{
        type: "RESET_SONG_SEARCH"
    }
}

export const postSearch = (songs) => {
    // console.log("ARTISTS: ", artists)
    // console.log("ALBUMS: ", albums)
    console.log("SONGS: ", songs)
    // const postAlbums = (albums) =>{

    //     return (dispatch) =>{
            
    //     }
    // }

    return (dispatch) => {
        // artists.forEach((artist) => {
            fetch("http://localhost:3000/api/v1/artists",{method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    'Access-Control-Allow-Credentials': 'true'
                },
                body: JSON.stringify({
                    songs
                })
            })
            .then(resp => resp.json())
            .then((resp) => {
                console.log("response", resp)
                dispatch({
                    type: "SET_ARTISTS",
                    payload: {artists: resp.artists}
                })
                dispatch({
                    type: "SET_ARTIST_RESULTS",
                    payload: {
                        artistSearchResults: [...resp.searchArtists]
                    }
                })
                dispatch({
                    type: "SET_ALBUMS",
                    payload: {albums: resp.albums}
                })
                dispatch({
                    type: "SET_ALBUM_RESULTS",
                    payload: {
                        albumSearchResults: [...resp.searchAlbums]
                    }
                })
                dispatch({
                    type: "SET_SONGS",
                    payload: {songs: resp.songs}
                })
                dispatch({
                    type: "SET_SONG_RESULTS",
                    payload: {
                        songSearchResults: [...resp.searchSongs]
                    }
                })
                // setArtistSearchResults([...resp])
            })
        
            // .then(
            //     fetch("http://localhost:3000/api/v1/albums",{method: "POST",
            //         headers:{
            //             "Content-Type": "application/json",
            //             "Accept": "application/json",
            //             "Access-Control-Allow-Origin": "http://localhost:3000",
            //             'Access-Control-Allow-Credentials': 'true'
            //         },
            //         body: JSON.stringify({
            //             albums
            //         })
            //     })
            //     .then(resp => resp.json())
            //     .then((resp) => {
            //         dispatch({
            //             type: "SET_ALBUMS",
            //             payload: {albums: resp}
            //         })
            //         setAlbumSearchResults(resp)
            //     })
            // )
            // .then(postSongs(songs))
        
    }
}
   



// export const postSongs = (songs) =>{
//     return (dispatch) =>{
//         songs.forEach((song) => {
//             fetch("http://localhost:3000/api/v1/songs",{method: "POST",
//                 headers:{
//                     "Content-Type": "application/json",
//                     "Accept": "application/json",
//                     "Access-Control-Allow-Origin": "http://localhost:3000",
//                     'Access-Control-Allow-Credentials': 'true'
//                 },
//                 body: JSON.stringify({
//                     song:{
    
//                         title: song.title,
//                         duration: song.duration,
//                         preview: song.preview
//                     }
//                 })
//             })
//             .then((resp) => {
//                 dispatch({
//                     type: "SET_SONGS",
//                     payload: {songs: resp}
//                 })
//                 setSongSearchResults(resp)
//             })
//         })
//     }
// }



