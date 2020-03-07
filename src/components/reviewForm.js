import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {postNewReview} from '../actionCreators'



const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    '& .outlined-number':{
      width: 30,
    },
    },
  
}));

function ReviewForm(props) {
  const classes = useStyles();
  const [review, setReview] = React.useState('');
  const [rating, setRating] = React.useState('');

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  }

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  }

  const postReview = (e) =>{
    e.preventDefault()
    let reviewObj = {
      review: review,
      rating: rating,
      album_id: props.album.id
    }
    console.log("ARTISTS SEARCH", props.artistSearchResults)
    console.log("ALBUMS SEARCH", props.albumSearchResults)
    props.postNewReview(reviewObj, props.user, props.artistSearchResults, props.albumSearchResults)
    props.closeForm()
  }
  return (
    <form className={classes.root} onSubmit={(e) => postReview(e)} noValidate autoComplete="off">
      <div>
      <TextField
          onChange = {(e) => handleRatingChange(e)}
          id="outlined-number"
          label="Rating (out of 10)"
          type="number"
          value = {rating}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          onChange = {(e) => handleReviewChange(e)}
          label="Review"
          multiline
          value = {review}
          rows="2"
          defaultValue=""
          variant="outlined"
        />
        <Button type ="submit" variant="outlined" style={{color: "pink"}} >
            Submit
        </Button> 
        <Button variant="outlined" style={{color: "pink"}} onClick={()=> props.closeForm()}>
            Close
        </Button> 
      </div>
    </form>
  );
}

function msp(state){
  return{
    user: state.user,
    artistSearchResults: state.artistSearchResults,
    albumSearchResults: state.albumSearchResults
  }
}

const mdp ={
  postNewReview
}


export default connect(msp, mdp)(ReviewForm)