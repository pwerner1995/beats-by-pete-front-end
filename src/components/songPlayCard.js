import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

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
  },
  content: {
    flex: '1 0 auto',
    padding: 0
  },
  cover: {
    width: 120,
    height: 120
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

export default function SongPlayCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(props.props.title)
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
        <ThemeProvider >
          <Typography component="subtitle1" variant="subtitle1">
            {props.props.title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {props.props.artist_name}
          </Typography>
        </ThemeProvider>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        component="img"
        image={props.props.album_cover}
        title={props.props.title}
      />
    </Card>
  );
}