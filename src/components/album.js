import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {selectAlbum, openSearchForm} from '../actionCreators'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReviewForm from './reviewForm'


const useStyles = makeStyles({
    card: {
        maxWidth: 240,
      },
      media: {
        height: 240,
      },
});
function Album(props) {
    const classes = useStyles();
    

    const [openReviewForm, setOpenReviewForm] = React.useState(false)

    const openForm = () =>{
      setOpenReviewForm(true)
    }
    
    const closeForm = () =>{
      setOpenReviewForm(false)
      console.log("review bool", openReviewForm)
    }


      return (
        <div style={{margin: "1.5em"}}>
        <Grid item>
        <Card className = {classes.card} >
          <Link to={`/albums/${props.album.id}`} >
          <CardActionArea onClick = {() => {
            props.selectAlbum(props.album)
                  if(props.search){
                    props.openSearchForm()
                  }
                  }}>
          
            <CardMedia
                className = {classes.media}
                component="img"
                height="140"
                width="345"
                image= {props.album.cover}
                title= {props.album.title}
                
            />
          </CardActionArea>
          </Link>
            <CardContent>
              <Typography gutterBottom variant="p" component="p">
                {props.album.title} by {props.album.artist_name}
              </Typography>
            
            </CardContent>
          
          
          
          <div  style = {{display: "flex", justifyContent: "space-around",marginBottom:"3%"}}>
          {openReviewForm ? <ReviewForm closeForm ={closeForm}/> : <Button onClick={()=> openForm()} variant="outlined" style={{color: "pink"}}  >
            Review
            </Button> }
            </div>
          
        </Card>
        </Grid>
        </div>
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