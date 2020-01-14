import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import Album from '../components/album'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import AlbumPage from '../components/albumPage'



class AlbumContainer extends React.Component {


    render(){
        
        return (
            <React.Fragment>
            <CssBaseline />
            <Grid container flexGrow={1} >
            <div className="album-container">
                <Switch>
                    <Route path="/albums/:id" render={(routerProps) => {
                            // console.log("test")
                            return <AlbumPage  {...routerProps}/>
                            }}/>        
                    <Route exact path="/albums" render={() => {
                        if(this.props.albums.length > 0) {
                            return (this.props.albums[0].map(album => {    
                                // console.log("album container",album)
                                return <Album album = {album}/>
                            }))
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
        albums: state.albums
    }
}

export default connect(msp)(AlbumContainer)