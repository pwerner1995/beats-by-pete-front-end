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

const useStyles = makeStyles({
    card: {
        maxWidth: 120,
      },
      media: {
        height: 120,
      },
});
function SongPage(props) {
    // let artistAlbums = []
    const classes = useStyles();
    // const albums = () =>{
    //     artistAlbums = props.albums[0].map(album => {
    //          if(album.artist_id === props.artist.id){
    //              this.setState({albums: [...this.state.albums, album.title]})
    //          }
    //     })
    // }
      console.log(props.song)
      return (
        <Grid item>
        <Card className = {classes.card} >
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
        </Grid>
      );

  }

  function msp(state){
    console.log(state)  
    return {
          song: state.selectedSong
      }
  }

export default connect(msp)(SongPage)