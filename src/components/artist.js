import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    const classes = useStyles();
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
                <br/>
                Average Rating: {props.artist.avg_rating}
              </Typography>
            </CardContent>
          </CardActionArea>
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