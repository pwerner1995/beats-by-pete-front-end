import React from 'react'
import { connect } from 'react-redux';
import Artist from '../components/artist'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';



class ArtistContainer extends React.Component {


    render(){
        
        return (
            <React.Fragment>
            <CssBaseline />
            <Grid container flexGrow={1} >
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: "wrap", justifyContent: "center", marginTop:"5%"}}>
                <div style={{ marginBottom: "3%", color:"#FFA5B1" }}>
                    <Typography gutterBottom variant="h6" component="h6">
                        {`TOP RATED ARTISTS`}
                    </Typography>
                </div>
                <div className="artist-container" style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", width: "80%", marginBottom:"20%", marginLeft:"10%"}}>
                    {this.props.topRatedArtists.length > 0 ? this.props.topRatedArtists.map(artist => {    
                                        return <Artist artist = {artist} albums = {this.props.albums}/>
                                    }) : null}
                </div>
            </div>
            </Grid>
            </React.Fragment>
        )
    }

}


const msp = state =>{
    return{
        artists: state.artists,
        albums: state.albums,
        topRatedArtists: state.topRatedArtists
    }
}

export default connect(msp)(ArtistContainer)