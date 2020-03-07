// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// // import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/core/styles';
// import {setPlaylist, playingSong, resetPlaylist, showPlayer} from '../actionCreators'
// import { connect } from 'react-redux';
// import PauseIcon from '@material-ui/icons/Pause';

// // let fontTheme = createMuiTheme({
// //     typography: {
// //       subtitle1: {
// //         fontSize: 10,
// //       },
// //       h6: {
// //         fontSize: 12,
// //       },
// //     },
// //   });
// // fontTheme = responsiveFontSizes(fontTheme);

// const useStyles = makeStyles(theme => ({
//   card: {
//     display: 'flex',
//     height: 120,
//     width: 290
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   content: {
//     flex: '1 0 auto',
//     padding: 0
//   },
//   cover: {
//     width: 120,
//     height: 120
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1),
//   },
//   playIcon: {
//     height: 35,
//     width: 35,
//   },
// }));

// function SongPlayCard(props) {
//   const classes = useStyles();
//   const theme = useTheme();
//   console.log(props.song.title)

//   return (
//     <Card className={classes.card} style={{marginTop:"5%"}}>
//       <div className={classes.details} >
//         <CardContent className={classes.content}>
//         <ThemeProvider >
//           <Typography component="subtitle1" variant="subtitle1">
//             {props.song.title}
//           </Typography>
//           <Typography variant="subtitle2" color="textSecondary">
//             {props.song.artist_name}
//           </Typography>
//         </ThemeProvider>
//         </CardContent>
//         <div className={classes.controls}>
//           <IconButton aria-label="previous">
//             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//           </IconButton>
//           <IconButton aria-label="play/pause">
//             {!props.playing ? <PlayArrowIcon className={classes.playIcon} onClick ={() => {
//                   if(!props.playlist.includes(props.song)){
//                     props.setPlaylist(props.song)
//                     props.playingSong()
//                   }
//                   }}/> : <PauseIcon className={classes.playIcon} onClick ={() =>{
//                     props.playingSong();
//                     props.showPlayer()
//                     props.resetPlaylist();
//                   }}/>}
//           </IconButton>
//           <IconButton aria-label="next">
//             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//           </IconButton>
//         </div>
//       </div>
//       <CardMedia
//         className={classes.cover}
//         component="img"
//         image={props.song.album_cover}
//         title={props.song.title}
//       />
//     </Card>
//   );
// }

// const msp = (state) =>{
//   return {
//     playlist: state.playlist,
//     playing: state.playing
//   }
// }

// const mdp ={
//   setPlaylist,
//   playingSong,
//   resetPlaylist,
//   showPlayer
// }

// export default connect(msp, mdp)(SongPlayCard)

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
import { connect } from 'react-redux';
import {selectSong, openSearchForm, setPlaylist, playingSong, resetPlaylist, showPlayer} from '../actionCreators'
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    card: {
        maxWidth: 240,
      },
      media: {
        height: 240,
      },
});
function SongPlayCard(props) {
    const classes = useStyles();
      return (
        <Grid item>
          <div style={{display: 'flex', justifyContent: "center", margin: "1.5em"}}>
        <Link to={`/songs/${props.song.id}`}>
        <Card className = {classes.card} margin="10px" onClick={()=> {
                                          props.selectSong(props.song)
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
                image= {props.song.album_cover}
                title= {props.song.title}
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="p">
                {props.song.title} by {props.song.artist_name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {!props.playing ? <Button size="small" color="primary" onClick ={() => {
                  if(!props.playlist.includes(props.song)){
                    props.setPlaylist(props.song)
                    props.playingSong()
                  }
                  }}>
                  Open Music Player
                </Button>
                : <Button size="small" color="primary"onClick ={() =>{
                    props.playingSong();
                    props.showPlayer()
                    props.resetPlaylist();
                  }}>
                    Close Music Player
                  </Button>
                  }
          </CardActions>
        </Card>
        </Link>
        </div>
        </Grid>
      );

  }

  function msp(state){
      return {
        search: state.search,
        playlist: state.playlist,
        playing: state.playing
      }
  }

  const mdp ={
      selectSong,
      openSearchForm,
      setPlaylist,
      playingSong,
      resetPlaylist,
      showPlayer
  }

export default connect(msp, mdp)(SongPlayCard)