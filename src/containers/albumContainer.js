import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import Album from '../components/album'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import AlbumPage from '../components/albumPage'
import Typography from '@material-ui/core/Typography';



class AlbumContainer extends React.Component {


    render(){
        
        return (
            <React.Fragment>
            <CssBaseline />
            <Grid container flexGrow={1} >
            {/* {// div flexdirectin col} */}
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: "wrap", justifyContent: "center", marginTop:"5%"}}>

                        <div style={{ marginBottom: "3%", color:"#FFA5B1" }}>

                            <Typography gutterBottom variant="h6" component="h6">
                                {`TOP RATED ALBUMS`}
                            </Typography>
                        </div>
                <div className="album-container" style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", width: "80%", marginBottom:"20%", marginLeft:"10%"}}>
                    
                <Switch>
                    <Route path="/albums/:id" render={(routerProps) => {
                            // console.log("test")
                            return <AlbumPage  {...routerProps}/>
                            }}/>        
                    <Route exact path="/albums" render={() => {
                        if(this.props.topRatedAlbums.length > 0) {
                            return (this.props.topRatedAlbums.map(album => {    
                                    // console.log("album container",album)
                                    return <Album album = {album}/>
                                })
                            )
                        }
                    }}/>
                    
                </Switch>
                
                


                </div>
            </div>
            </Grid>
            </React.Fragment>
        )
    }

}


const msp = state =>{
    return{
        albums: state.albums,
        topRatedAlbums: state.topRatedAlbums
    }
}

export default connect(msp)(AlbumContainer)