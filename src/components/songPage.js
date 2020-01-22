import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {selectSong} from '../actionCreators'
import SongPlayCard from './songPlayCard'

const useStyles = makeStyles({
    card: {
        maxWidth: 240,
      },
      media: {
        height: 240,
      },
});
function SongPage(props) {
    // let artistAlbums = []
    const classes = useStyles();
    // let lyricsArtist = ""
    // let lyricsSong =  ""

    // const fetchLyrics = () =>{
    //   lyricsArtist = props.song.artist_name.toLowerCase().split(" ").join("%2520")
    //   lyricsSong = props.song.title.toLowerCase().split(" ").join("%2520")
    //   fetch(`https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=${lyricsArtist}&song=${lyricsSong}`, {
    //       "method": "GET",
    //       "headers": {
    //         "x-rapidapi-host": "sridurgayadav-chart-lyrics-v1.p.rapidapi.com",
    //         "x-rapidapi-key": "3f7b8337f8msh54164a2afdb63a2p12c84fjsn17115393b37d"
    //       }
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }

    if(!props.song.id && props.songs[0]){
        let song = {}
        console.log(song)
        song = props.songs.find(song => song.id === parseInt(props.match.params.id))
        props.selectSong(song)

    }
      console.log(props.song)
      // if(props.song.id){
      //   fetchLyrics()
      // }
      return (
        <SongPlayCard song = {props.song}/>
        
      );

  }

  function msp(state){
    console.log(state)  
    return {
          song: state.selectedSong,
          songs: state.songs
      }
  }

  const mdp ={
    selectSong
  }

export default connect(msp, mdp)(SongPage)