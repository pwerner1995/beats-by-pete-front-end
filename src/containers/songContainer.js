import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import Song from '../components/song'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SongPage from '../components/songPage'

class SongContainer extends React.Component {


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
                <div className="album-container" style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", width: "100%", marginBottom:"20%", marginTop:"5%"}}>
                <Switch>
                    <Route path="/songs/:id" render={(routerProps)=> <SongPage {...routerProps}/>}/>
                    <Route exact path="/songs" render={() => {
                        if(this.props.songs.length > 0) {
                            return (this.props.songs.map(song => {    
                                    // console.log("song container",song)
                                    return <Song song = {song}/>
                                })
                            )
                        }
                    }}/>
                </Switch>
                </div>
              </Grid>
            </React.Fragment>
          );
    }

}


const msp = state =>{
    return{
        songs: state.songs
    }
}

export default connect(msp)(SongContainer)