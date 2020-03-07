import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {selectSong} from '../actionCreators'
import SongPlayCard from './songPlayCard'

const useStyles = makeStyles({
    card: {
        maxWidth: 480,
      },
      media: {
        height: 480,
        width: 480
      },
});
function SongPage(props) {
    const classes = useStyles();
    if(!props.song.id && props.songs[0]){
        let song = {}
        console.log(song)
        song = props.songs.find(song => song.id === parseInt(props.match.params.id))
        props.selectSong(song)

    }
      console.log(props.song)
      return (
        <div style={{marginTop:"5%"}}>
        <SongPlayCard song = {props.song}/>
        </div>
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