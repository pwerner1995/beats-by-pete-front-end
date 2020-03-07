import React from 'react'
import { connect } from 'react-redux';
import Song from '../components/song'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class SongContainer extends React.Component {


    render(){
         
        return (
            <React.Fragment>
              <CssBaseline />
              <Grid container flexGrow={1} >
                <div style={{display: 'flex', flexDirection: 'column', flexWrap: "wrap", justifyContent: "center", marginTop:"5%"}}>
                        <div style={{ marginBottom: "3%", color:"#FFA5B1" }}>

                            <Typography gutterBottom variant="h6" component="h6">
                                {`PETE's PICKS OF THE DAY`}
                            </Typography>

                        </div>
                <div className="album-container" style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", marginBottom:"20%", width: "80%", marginLeft:"10%"}}>
                {this.props.petesTreats.length > 0 ? this.props.petesTreats.map(song => {    
                                    return <Song song = {song}/>
                                }) : null}
                </div>
                </div>
              </Grid>
            </React.Fragment>
          );
    }

}


const msp = state =>{
    return{
        songs: state.songs,
        petesTreats: state.petesTreats
    }
}

export default connect(msp)(SongContainer)