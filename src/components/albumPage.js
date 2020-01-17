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
// import {selectAlbum} from '../actionCreators'
import { connect } from 'react-redux';
import Song from './song'
import {selectAlbum} from '../actionCreators'


const useStyles = makeStyles({
    card: {
        maxWidth: 240,
      },
      media: {
        height: 240,
      },
});


function AlbumPage(props) {
    const classes = useStyles();
    // console.log("Selected Album", props.album)
    console.log("album:",props.album)
    if(!props.album.id && props.albums[0]){
        let album = {} 
        console.log(album)
        album = props.albums[0].find(album => album.id === parseInt(props.match.params.id))
        props.selectAlbum(album)

    }
    let albumSongs = []
    if(props.songs[0]){
        albumSongs = props.songs[0].filter((song) => {
            return song.album_id === props.album.id
        })
    }
    // console.log(props)
    if(props.album){

        return (
            <Grid item>
            <Card className = {classes.card} style={{marginBottom: "10%", marginTop: "5%", marginLeft: "5%"}} >
              <CardActionArea>
                <CardMedia
                    className = {classes.media}
                    component="img"
                    height="140"
                    width="345"
                    image= {props.album.cover}
                    title= {props.album.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="p">
                    {props.album.title}
                  </Typography>
                    {/* {this.state.albums.length < 0 ? this.albums() : null}
                    {this.state.albums.forEach(album => {
                        return(<Typography variant="body2" color="textSecondary" component="p">
                            album
                        </Typography>)
                    })
                    } */}
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions> */}
            </Card>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", width: "100%"}}>
                {albumSongs.map(song => <Song song = {song}/>)}
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