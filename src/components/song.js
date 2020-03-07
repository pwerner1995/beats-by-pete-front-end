import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {selectSong, openSearchForm} from '../actionCreators'
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    card: {
        maxWidth: 240,
      },
      media: {
        height: 240,
      },
});
function Song(props) {
    const classes = useStyles();
      return (
        <Grid item>
          <div style={{display: 'flex', justifyContent: "center", margin: "1.5em"}}>
        <Link to={`/songs/${props.song.id}`}>
        <Card className = {classes.card} margin="10px" onClick={()=> {
                                          props.selectSong(props.song)
                                          if(props.search){
                                            props.openSearchForm()
                                          }
                                          }}>
          <CardActionArea>
            <CardMedia
                className = {classes.media}
                component="img"
                height="140"
                width="345"
                image= {props.song.album_cover}
                title= {props.song.title}
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="p">
                {props.song.title} by {props.song.artist_name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
        </div>
        </Grid>
      );

  }

  function msp(state){
      return {
        search: state.search
      }
  }

  const mdp ={
      selectSong,
      openSearchForm
  }

export default connect(msp, mdp)(Song)