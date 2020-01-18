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
import Album from './album'
import {selectArtist} from '../actionCreators'



const useStyles = makeStyles({
    card: {
        maxWidth: 240,
      },
      media: {
        height: 240,
      },
});
function Artist(props) {
    // let artistAlbums = []
    const classes = useStyles();
    // const albums = () =>{
    //     artistAlbums = props.albums[0].map(album => {
    //          if(album.artist_id === props.artist.id){
    //              this.setState({albums: [...this.state.albums, album.title]})
    //          }
    //     })
    // }
    //   console.log(props)
    let albums = []
    let artist ={}
    if(!props.artist.id && props.albums[0] && props.artists[0]){
        artist = props.artists.find(artist => artist.id === parseInt(props.match.params.id))
        props.selectArtist(artist)
    }
    if(props.albums[0]){
        albums = props.albums.filter(album => album.artist_id === props.artist.id)
        // if(props.albums[1]){
        //   props.albums.forEach((arr)=>{
        //     albums = [...albums, arr.filter(album => album.artist_id ===props.artist.id)]
        //     console.log(albums)
        //   })
          
        }
    
    if(props.artist){

        return (
          <Grid item>
          <Card className = {classes.card} style={{marginBottom: "10%", marginTop: "5%", marginLeft: "5%", marginTop:"5%"}} >
            <CardActionArea>
              <CardMedia
                  className = {classes.media}
                  component="img"
                  height="140"
                  width="345"
                  image= {props.artist.picture}
                  title= {props.artist.name}
              />
              <CardContent>
                <Typography gutterBottom variant="p" component="p">
                  {props.artist.name}
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
            {albums.map(album => <Album album ={album}/>)}
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