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
            type: "FETCH_ARTISTS",
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
            type: "FETCH_SONGS",
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
            type: "FETCH_ALBUMS",
            payload: {albums: data}
        }))
    } 

}

export const setPlaylist = (song) => {
    return (dispatch) => {
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

export function setSearchResults(results){
    return{
        type: "FETCH_SEARCH",
        payload: {
            searchResults: results
        }
    }
}

export function resetSearchResults(){
    return{
        type: "RESET_SEARCH"
    }
}



