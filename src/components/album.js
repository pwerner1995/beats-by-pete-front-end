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
import {selectAlbum, openSearchForm} from '../actionCreators'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    card: {
        maxWidth: 120,
      },
      media: {
        height: 120,
      },
});
function Album(props) {
    const classes = useStyles();
    

      return (
        <Grid item>
        <Link to={`/albums/${props.album.id}`} >
        <Card className = {classes.card} onClick = {() => {
                                      props.selectAlbum(props.album)
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
                image= {props.album.cover}
                title= {props.album.title}
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="p">
                {props.album.title} by {props.album.artist_name}
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
        </Grid>
      );

  }

  function msp(state){
    return {
      search: state.search
    }
  }

  const mdp = {
    selectAlbum,
    openSearchForm
  }


export default connect(msp, mdp)(Album)