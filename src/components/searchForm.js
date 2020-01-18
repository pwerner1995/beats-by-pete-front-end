import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {setArtistSearchResults,
    setSongSearchResults,
    setAlbumSearchResults,
    resetArtistSearchResults,
    resetAlbumSearchResults,
    resetSongSearchResults,
    postSearch
    // postAlbums,
    // postSongs

} from '../actionCreators'
// import {postSearchResults} from '../postFetch'


const useStyles = makeStyles(theme => ({
  formRoot: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    
  },
  buttonRoot:{
    '& > *': {
        margin: theme.spacing(1),
      },
  },
}));




function SearchForm(props) {
    const classes = useStyles();
    const [artist, setArtist] = React.useState('')
    const [album, setAlbum] = React.useState('')
    const [song, setSong] = React.useState('')

    
    const handleArtistChange = (e) => {
        setArtist(e.target.value.toUpperCase())
    }

    const handleAlbumChange = (e) => {
        setAlbum(e.target.value.toUpperCase())
    }

    const handleSongChange = (e) => {
        setSong(e.target.value.toUpperCase())
    }

    const postSearchResults = (results) =>{
        // console.log(props)
        // const state =  store.getState()
        // console.log("state: ",state)
        let songs = []
        console.log("Deezer", results)
        results.data.forEach((song) => {
            // console.log(artists)
            
                songs.push(song)
                // if(props.artists[0].filter(a => a.name.toUpperCase().includes(song.artist.name.toUpperCase())).length < 1 ){
                //     artists.push(song.artist)
                // }
                // if(props.albums[0].filter(a => a.title.toUpperCase().includes(song.album.title.toUpperCase())).length < 1 ){
                    
                //     albums.push({album: song.album, artist: song.artist.name})
                // }
        })
        props.postSearch(songs)
       
        
    }

    const fetchSearch = (e) => {
        e.preventDefault()
        props.resetArtistSearchResults()
        props.resetAlbumSearchResults()
        props.resetSongSearchResults()
        let searchString =[]
        let artistString =""
        let albumString =""
        let songString=""
        artistString = artist.split(' ').join('%20')
        albumString = album.split(' ').join('%20')
        songString = song.split(' ').join('%20')
        searchString = [artistString, albumString, songString].join('%20')
        console.log("props artists", props.artists)
        // console.log(props.artists[0].filter(a => a.name.includes(artist)).length)
        // console.log(props.artists[0].forEach(a => console.log(a.name.toUpperCase().includes(artist))))
        let artistsArray = []
        let albumsArray = []
        let songsArray = []
        // artistsArray = props.artists[0].filter(a => a.name.toUpperCase().includes(artist))
        // albumsArray = props.albums[0].filter(a => a.artist_name.toUpperCase().includes(artist))
        // songsArray = props.songs[0].filter(a => a.artist_name.toUpperCase().includes(artist))

        if(album.length > 2){
            albumsArray = [...albumsArray, ...props.albums.filter(a => a.title.toUpperCase().includes(album))]
            songsArray = [...songsArray, ...props.songs.filter(a => a.album_name.toUpperCase().includes(album))]
        }
        
        if(song.length > 2){
            songsArray = [...songsArray, props.songs.filter(a => a.title.toUpperCase().includes(song))]
        }
        // console.log("filter aristArray", aristArray)
        // props.setArtistSearchResults(artistsArray)
        // props.setAlbumSearchResults(albumsArray)
        // props.setSongSearchResults(songsArray)
        
        
            fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchString}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "3f7b8337f8msh54164a2afdb63a2p12c84fjsn17115393b37d"
                }
            })
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                // console.log(data);
                postSearchResults(data)
                // props.setArtistSearchResults(data)
                // props.setAlbumSearchResults(data)
                // props.setSongSearchResults(data)
    
            });
        
    }

    // console.log("Artist: ", artist)
    // console.log("Album: ", album)
    // console.log("Song: ", song)


    return (
    <form className={classes.formRoot} onSubmit ={(e) => fetchSearch(e)} noValidate autoComplete="off">
        <div>
        <TextField
            onChange = {(e) => handleArtistChange(e)}
            value = {artist}
            label="Artist"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
        />
        <TextField
            onChange = {(e) => handleAlbumChange(e)}
            value = {album}
            label="Album"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
        />
        <TextField
            onChange = {(e) => handleSongChange(e)}
            value = {song}
            label="Song"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
        />
        <div className={classes.buttonRoot}>
        <Button type ="submit" variant="outlined" style={{color: "pink"}} >
            Search
        </Button> 
        </div>

        </div>
    </form>
    );
}

function msp(state){
    return {
        artists: state.artists,
        songs: state.songs,
        albums: state.albums
    }
}

const mdp ={
    setArtistSearchResults,
    setSongSearchResults,
    setAlbumSearchResults,
    resetArtistSearchResults,
    resetAlbumSearchResults,
    resetSongSearchResults,
    postSearch
    // postAlbums,
    // postSongs
}

export default connect(msp, mdp)(SearchForm)