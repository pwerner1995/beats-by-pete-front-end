import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import Artist from '../components/artist'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import ArtistPage from '../components/artistPage'



class ArtistContainer extends React.Component {


    render(){
        
        return (
            <React.Fragment>
            <CssBaseline />
            <Grid container flexGrow={1} >
            <div className="artist-container" style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", width: "100%", marginBottom:"20%", marginTop:"5%"}}>
                <Switch>
                    <Route path="/artists/:id" render={(routerProps)=> <ArtistPage {...routerProps} />}/>
                    <Route path="/artists" render={() => {
                        if(this.props.artists.length > 0) {
                            return (this.props.artists.map(artist => {    
                                    // console.log("artist container",artist)
                                    return <Artist artist = {artist} albums = {this.props.albums}/>
                                })
                            )
                        }
                    }}/>
                </Switch>
            
                


            </div>
            </Grid>
            </React.Fragment>
        )
    }

}


const msp = state =>{
    return{
        artists: state.artists,
        albums: state.albums
    }
}

export default connect(msp)(ArtistContainer)