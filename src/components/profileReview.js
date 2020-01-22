// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { connect } from 'react-redux';
// import {deleteReview} from '../actionCreators'


// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// function ProfileReview(props) {
//   const classes = useStyles();
//   let album = props.albums.filter((album) => album.id === props.review.album_id)[0]
//   console.log(album)
  

//   return (
//     <Card className={classes.card} style={{margin: "2em"}}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image= {album.cover}
//           title={`${album.title} review`}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {props.review.rating}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {props.review.content}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary" onClick={()=> props.deleteReview(props.review)}>
//           Delete
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// function msp(state){
//     return{
//         albums: state.albums
//     }
// }

// const mdp ={
//   deleteReview
// }


// export default connect(msp, mdp)(ProfileReview)


import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import {deleteReview} from '../actionCreators'
import { connect } from 'react-redux';
// import PauseIcon from '@material-ui/icons/Pause';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


// let fontTheme = createMuiTheme({
//     typography: {
//       subtitle1: {
//         fontSize: 10,
//       },
//       h6: {
//         fontSize: 12,
//       },
//     },
//   });
// fontTheme = responsiveFontSizes(fontTheme);

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    height: 120,
    width: 290
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  content: {
    flex: '1 0 auto',
    padding: 1,
    alignSelf: "center"
  },
  cover: {
    width: 120,
    height: 120,
    alignSelf:"right"
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 35,
    width: 35,
  },
}));

function ProfileReview(props) {
  const classes = useStyles();
  let album = props.albums.filter((album) => album.id === props.review.album_id)[0]
  // console.log(album)
  const theme = useTheme();
  // console.log(props.song.title)

  return (
    <Card className={classes.card} style={{margin: "2em", display:"flex"}}>
      
        <CardContent className={classes.content} >
           <Typography gutterBottom variant="h5" component="h5">
             {props.review.rating}
           </Typography>
          

           <Typography variant="body2" color="textSecondary" component="p">
             {props.review.content}
           </Typography>
          

          <Button size="small" color="primary" onClick={()=> props.deleteReview(props.review)}>
            Delete
          </Button>
        </CardContent>
        
        
  
      
   
      
      <CardMedia
        className={classes.cover}
        component="img"
        image={album.cover}
        title={album.title}
        // style={{justifyContent: "flex-end"}}
      />
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