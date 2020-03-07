import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import Song from '../components/song'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SongPage from '../components/songPage'

class MattsSlaps extends React.Component {


    render(){
        
        // return (
        //     <div className="album-container">
        //         <Switch>
        //             <Route path="/songs" render={() => {
        //                 if(this.props.songs.length > 0) {
        //                     return (this.props.songs[0].map(song => {    
        //                         console.log("song container",song)
        //                         return <Song song = {song}/>
        //                     }))
        //                 }
        //             }}/>
        //         </Switch>
                
                


        //     </div>
        // )
        
        return (
            <React.Fragment>
              <CssBaseline />
              <Grid container flexGrow={1} >
                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
                <div style={{display: 'flex', flexDirection: 'column', flexWrap: "wrap", justifyContent: "center", marginTop:"5%"}}>
                        <div style={{ marginBottom: "3%", color:"#FFA5B1" }}>

                            <Typography gutterBottom variant="h6" component="h6">
                                {`MATT's CERTIFIED SLAPS OF THE DAY`}
                            </Typography>
                        </div>
                <div className="album-container" style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", marginBottom:"20%", width: "80%", marginLeft:"10%"}}>
                {this.props.mattsSlaps.length > 0 ? this.props.mattsSlaps.map(song => {    
                                    // console.log("song container",song)
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
        mattsSlaps: state.mattsSlaps
    }
}

export default connect(msp)(MattsSlaps)