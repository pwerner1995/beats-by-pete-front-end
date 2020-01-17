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
import {selectArtist, openSearchForm} from '../actionCreators'
import { Link } from 'react-router-dom';




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
      // console.log(props)
      return (
        <Grid item>
        <div style={{ margin: "1.5em"}}>
        <Link to ={`/artists/${props.artist.id}`}>
        <Card className = {classes.card} onClick={()=> {
                                                    console.log(props)
                                                    props.selectArtist(props.artist)
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

  const mdp = {
      selectArtist,
      openSearchForm
  }


export default connect(msp, mdp)(Artist)