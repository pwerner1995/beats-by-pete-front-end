import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import Artist from '../components/artist'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Album from '../components/album'
import Box from '@material-ui/core/Box';
import ProfileReview from '../components/profileReview'
import {GetUserFavs} from '../actionCreators'
import Typography from '@material-ui/core/Typography';




class ProfileContainer extends React.Component {

    fetchUserInfo(){
        this.props.GetUserFavs(this.props.user)
    }
    render(){
        console.log(this.props.userFavs)
        return (
            <React.Fragment>
            <CssBaseline />
            <Grid container flexGrow={1} >
            <div className="profile-container" style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", marginBottom:"20%", marginTop:"5%", width: "80%", marginLeft:"10%"}}>
                    {/* <Typography gutterBottom variant="h3" component="h3">
                        {`${this.props.user.username}'s Profile`}
                    </Typography>  */}

                {this.props.userFavs === {} ? 
                    <Typography gutterBottom variant="h6" component="h6" >
                        {`You dont have any reviews yet!`}
                    </Typography> 
                    : null
                    }
                <div>
                    {this.props.userFavs.artists ? 
                     <div style={{ color:"#FFA5B1" }}>
                     <Typography gutterBottom variant="h6" component="h6" >
                         {`FAVORITE ARTISTS`}
                     </Typography> 
                     </div>
                     : null
                    }
                    
                <Box>

                    {this.props.userFavs.artists ? this.props.userFavs.artists.map((artist) => {
                        return <Artist artist = {artist} />
                    }) : null
                }
                </Box>
                </div>
                <div>
                {this.props.userFavs.albums ? 
                     <div style={{ color:"#FFA5B1" }}>
                     <Typography gutterBottom variant="h6" component="h6" >
                         {`FAVORITE ALBUMS`}
                     </Typography> 
                     </div>
                     : null
                    }
                <Box>
                    {this.props.userFavs.albums ? this.props.userFavs.albums.map((album) => {
                        console.log(album)
                        return <Album album = {album} /> 
                    }) : null
                }
                </Box>
                </div>
                <div>
                    {this.props.recentRevs.length > 0 ? 
                     <div style={{ color:"#FFA5B1" }}>
                     <Typography gutterBottom variant="h6" component="h6" >
                         {`LAST 5 REVIEWS`}
                     </Typography> 
                     </div>
                     : null
                    }

                <Box>
                    {/* {this.props.user ? this.fetchUserInfo() : null} */}
                    {this.props.recentRevs ? this.props.recentRevs.map((rev) => {
                        return <ProfileReview review = {rev} /> 
                    }) : null
                }
                </Box>
                </div>
                
                {/* <Switch>
                    <Route path="/artists/:id" render={(routerProps)=> <ArtistPage {...routerProps} />}/>
                    <Route path="/artists" render={() => {
                        if(this.props.topRatedArtists.length > 0) {
                            return (this.props.topRatedArtists.map(artist => {    
                                    // console.log("artist container",artist)
                                    return <Artist artist = {artist} albums = {this.props.albums}/>
                                })
                            )
                        }
                    }}/>
                </Switch> */}
            
                


            </div>
            </Grid>
            </React.Fragment>
        )
    }

}


const msp = state =>{
    return{
        userFavs: state.userFavs,
        recentRevs: state.recentRevs,
        user: state.user
    }
}

const mdp ={
    GetUserFavs
}

export default connect(msp, mdp)(ProfileContainer)