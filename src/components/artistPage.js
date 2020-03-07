import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Album from './album'
import {selectArtist} from '../actionCreators'

const useStyles = makeStyles({
    card: {
        maxWidth: 480,
      },
      media: {
        height: 480,
        width: 480
      },
});
function Artist(props) {
    const classes = useStyles();
    let albums = []
    let artist ={}
    if(!props.artist.id && props.albums[0] && props.artists[0]){
        artist = props.artists.find(artist => artist.id === parseInt(props.match.params.id))
        props.selectArtist(artist)
    }
    if(props.albums[0]){
        albums = props.albums.filter(album => album.artist_id === props.artist.id)
        albums = albums.sort((a, b) => (b.avg_rating > a.avg_rating) ? 1 : -1)
        }
    
    if(props.artist){

        return (
          <Grid item>
          <div style={{display: 'flex', flexDirection: 'column', flexWrap: "wrap", justifyContent: "center", marginTop:"5%", width: "80%", marginLeft: "10%"}}>
          <Card className = {classes.card} style={{display: 'flex', marginBottom: "5%", alignSelf: "center"}}>
            <CardActionArea>
              <CardMedia
                  className = {classes.media}
                  component="img"
                  height="140"
                  width="345"
                  image= {props.artist.lg_picture ? props.artist.lg_picture : props.artist.picture}
                  title= {props.artist.name}
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="p">
                  {props.artist.name}
                    <br/>
                  Average Rating: {props.artist.avg_rating}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", marginBottom:"20%", alignSelf: "center"}}> 
            {albums.map(album => <Album album ={album}/>)}
          </div>
          </div>
          </Grid>
        );
    }else{
        return(
            <div>

            </div>
        )
    }

  }

  function msp(state){
      return {
          artists: state.artists,
          artist: state.selectedArtist,
          albums: state.albums
      }
  }

  const mdp = {
      selectArtist
  }


export default connect(msp, mdp)(Artist)