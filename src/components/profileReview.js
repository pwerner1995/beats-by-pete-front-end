import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {deleteReview} from '../actionCreators'


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ProfileReview(props) {
  const classes = useStyles();
  let album = props.albums.filter((album) => album.id === props.review.album_id)[0]
  console.log(album)
  

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {album.cover}
          title={`${album.title} review`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.review.rating}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.review.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=> props.deleteReview(props.review)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

function msp(state){
    return{
        albums: state.albums
    }
}

const mdp ={
  deleteReview
}


export default connect(msp, mdp)(ProfileReview)