import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {setSearchResults} from '../actionCreators'


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

    const fetchSearch = (e) => {
        e.preventDefault()
        let searchString =[]
        let artistString =""
        let albumString =""
        let songString=""
        artistString = artist.split(' ').join('%20')
        albumString = album.split(' ').join('%20')
        songString = song.split(' ').join('%20')
        searchString = [artistString, albumString, songString].join('%20')
        console.log("props artists", props.artists)
        console.log(props.artists[0].filter(a => a.name.includes(artist)).length)
        console.log(props.artists[0].forEach(a => console.log(a.name.includes(artist))))

        if(props.artists[0].filter(a => a.name.includes(artist)).length < 1){
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
                console.log(data);
                props.setSearchResults(data)
    
            });
        }else{
            let array = []
            array = props.artists[0].filter(a => a.name.includes(artist))
            console.log("filter array", array)
            props.setSearchResults(array[0])
        }
        
    }

    console.log("Artist: ", artist)
    console.log("Album: ", album)
    console.log("Song: ", song)


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
        artists: state.artists
    }
}

const mdp ={
    setSearchResults,
}

export default connect(msp, mdp)(SearchForm)