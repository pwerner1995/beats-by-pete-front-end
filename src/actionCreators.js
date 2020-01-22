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
        .then(data => {
            dispatch({
                type: "SET_ARTISTS",
                payload: {artists: data.artists}
            })
            dispatch({
                type: "SET_TOP_ARTISTS",
                payload: {topRatedArtists: data.topRatedArtists}
            })
        
        })
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
        .then(data => {
            dispatch({
                type: "SET_SONGS",
                payload: {songs: data.songs}
            })
            dispatch({
                type:"SET_PETES_TREATS",
                payload: {treats: data.treats}
            })
        })
        
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
        .then(data => {
            console.log(data)
            dispatch({
                type: "SET_ALBUMS",
                payload: {albums: data.albums}
            })
            dispatch({
                type: "SET_TOP_ALBUMS",
                payload: {topRatedAlbums: data.topRatedAlbums}
            })
        })
    } 

}
export const  fetchReviews = () => {
    
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/reviews",{
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: "SET_REVIEWS",
            payload: {reviews: data}
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
        .then(data => {
            // console.log(data[0])
            // dispatch({
            //     type:"SET_USER", //temporary default user for testing
            //     payload: {user: data[0]}
            // })
            dispatch({
            type: "SET_USERS",
            payload: {users: data}
            })
        })
    } 

}

export function GetUserFavs(user){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user.id}`,{
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data.recent_reviews)
            dispatch({
                type: "SET_USER",
                payload: data.user
            })
            dispatch({
                type: "SET_USER_FAVS",
                payload: data.favs
            })
            dispatch({
                type: "SET_USER_REVIEWS",
                payload: data.recent_reviews
            })
        })
    }
}

export function SignInUser(){
    return{
        type: "SIGN_IN_USER"
    }
}

export function SignOut(){
    return{
        type: "SIGN_OUT"
    }
}
export function ResetUser(){
    return{
        type: "RESET_USER"
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
export function setSignUp(){
    return{
        type: "SIGN_UP"
    }
}
export function setSignUpFalse(){
    return{
        type: "SIGN_UP_FALSE"
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

export function resetUserError(){
    return{
        type: "RESET_USER_ERROR"
    }
}

export const createUser = (userName) =>{
    return (dispatch) =>{
        fetch("http://localhost:3000/api/v1/users",{method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify({
            userName
        })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            if(data.error === ""){
                dispatch({
                    type: "SIGN_UP_FALSE"
                })
                dispatch({
                    type: "SET_USERS",
                    payload: {users: data.users}
                })
            }else{
                dispatch({
                    type: "CREATE_USER_ERROR",
                    payload: {error: data.error}
                })
            }
        })
    }
}


export const deleteReview = (review) =>{
    return (dispatch) =>{
        fetch('http://localhost:3000/api/v1/reviews', {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Access-Control-Allow-Credentials': 'true'
            },
            body: JSON.stringify({
                review
            })
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: "SET_USER_FAVS",
                payload: data.favs
            })
            dispatch({
                type: "SET_USER_REVIEWS",
                payload: data.recent_reviews
            })
        })
    }
}

export const postNewReview = (review, user, artistSearchResults=[], albumSearchResults =[]) =>{
    console.log(review, user)
    return (dispatch) =>{
        fetch(`http://localhost:3000/api/v1/users/${user.id}/reviews`,{method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    'Access-Control-Allow-Credentials': 'true'
                },
                body: JSON.stringify({
                    review,
                    artistSearchResults,
                    albumSearchResults
                })
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if(data.error.length > 0){
                    alert(data.error)
                }else{
                    dispatch({
                        type: "SET_USER_REVIEWS",
                        payload: data.recent_reviews
                    })
                    dispatch({
                        type: "SET_USER_FAVS",
                        payload: data.favs
                    })
                    dispatch({
                        type: "SET_USER_REVIEWS",
                        payload: data.recent_reviews
                    })
                    dispatch({
                        type: "SET_ALBUM_RESULTS",
                        payload: {
                            albumSearchResults: data.albumSearchResults
                        }
                    })
                    dispatch({
                        type: "SET_ARTIST_RESULTS",
                        payload: {
                            artistSearchResults: data.artistSearchResults
                        }
                    })
                    dispatch({
                        type: "SET_REVIEWS",
                        payload: {reviews: data.reviews}
                    })
                    dispatch({
                        type: "SET_TOP_ARTISTS",
                        payload: {topRatedArtists: data.topRatedArtists}
                    })
                    dispatch({
                        type: "SET_TOP_ALBUMS",
                        payload: {topRatedAlbums: data.topRatedAlbums}
                    })
                    dispatch({
                        type: "SET_ARTISTS",
                        payload: {artists: data.artists}
                    })
                    dispatch({
                        type: "SET_ALBUMS",
                        payload: {albums: data.albums}
                    })
                }
                })
    }
}

export const postSearch = (songs, searchTerms) => {
    // console.log("ARTISTS: ", artists)
    // console.log("ALBUMS: ", albums)
    console.log("Search Terms: ", searchTerms)
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
                    songs,
                    searchTerms
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
    }
}
