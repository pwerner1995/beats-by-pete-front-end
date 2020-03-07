import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Song from './song'
import {selectAlbum} from '../actionCreators'


const useStyles = makeStyles({
    card: {
        maxWidth: 480,
      },
      media: {
        height: 480,
        width: 480
      },
});


function AlbumPage(props) {
    const classes = useStyles();
    console.log("album:",props.album)
    if(!props.album.id && props.albums[0]){
        let album = {} 
        console.log(album)
        album = props.albums.find(album => album.id === parseInt(props.match.params.id))
        props.selectAlbum(album)

    }
    let albumSongs = []
    if(props.songs[0]){
        albumSongs = props.songs.filter((song) => {
            return song.album_id === props.album.id
        })
    }
    console.log(albumSongs)
    if(props.album){

        return (
          <Grid item>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: "wrap", justifyContent: "center", marginTop:"5%", width: "80%", marginLeft: "10%"}}>
            
            <Card className = {classes.card} style={{display: 'flex', marginBottom: "5%", alignSelf: "center"}} >
              <CardActionArea>
                <CardMedia
                    className = {classes.media}
                    component="img"
                    height="140"
                    width="345"
                    image= {props.album.lg_cover ? props.album.lg_cover : props.album.cover }
                    title= {props.album.title}
                />
                <CardContent>
                <Typography gutterBottom variant="subtitle1" component="p">
                    {props.album.title} by {props.album.artist_name}
                    <br/>
                    Average Rating: {props.album.avg_rating}
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", marginBottom:"20%", alignSelf: "center"}}>
                {albumSongs.map(song => <Song song = {song}/>)}
            </div>
            </div>
            </Grid>
    
    
          );
    }else{
        return(
            <div></div>

        )
    }
  }

  function msp(state){
    return {
        albums: state.albums,
        album: state.selectedAlbum,
        songs: state.songs
    }
  }
  const mdp = {
    selectAlbum
  }


export default connect(msp, mdp)(AlbumPage)