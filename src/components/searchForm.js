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
} from '../actionCreators'


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
        setArtist(e.target.value)
    }

    const handleAlbumChange = (e) => {
        setAlbum(e.target.value)
    }

    const handleSongChange = (e) => {
        setSong(e.target.value)
    }

    const postSearchResults = (results) =>{
        let songs = []
        console.log("Deezer", results)
        let searchTerms = {
            artist: artist,
            album: album,
            song: song,
        }
        if(results.data.length > 0){
            results.data.forEach((song) => {
                    songs.push(song)
            })
        }
        props.postSearch(songs, searchTerms)
       
        
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
                postSearchResults(data)
            });
        
    }

    return (
        <div>
            {props.signedIn ? 
            <form className={classes.formRoot} style={{marginTop:"5%"}} onSubmit ={(e) => fetchSearch(e)} noValidate autoComplete="off">
                {/* <div> */}
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

                {/* </div> */}
            </form> : null}
        </div>
    );
}

function msp(state){
    return {
        artists: state.artists,
        songs: state.songs,
        albums: state.albums,
        signedIn: state.signedIn
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
}

export default connect(msp, mdp)(SearchForm)