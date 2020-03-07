import React from 'react'
import { connect } from 'react-redux';
import Album from '../components/album'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Artist from '../components/artist'
import Song from '../components/song'
import Typography from '@material-ui/core/Typography';
import LoadingBar from '../components/loadingBar'


class SearchResultsContainer extends React.Component {

    renderArtists = () =>{
        let showArtists = []
        console.log(this.props.artistSearchResults)
        if(this.props.artistSearchResults[0].data){
            this.props.artistSearchResults[this.props.artistSearchResults.length - 1].data.forEach((result) =>{
                console.log("show artists: ", showArtists)
                if(showArtists.filter(artist => artist.name === result.artist.name).length < 1 && !result.title.includes(result.artist.name)){
                    showArtists.push( {
                        id: result.artist.id,
                        name: result.artist.name,
                        picture: result.artist.picture
                    })
                }
            })
            return showArtists.map((artist) => {
                return <Artist artist = {artist} />
            })
        }else{
            showArtists = this.props.artistSearchResults
            return showArtists.map((artist) => {
                    return <Artist artist = {artist} />
                })
        }
    }

    renderAlbums = () =>{
        let showAlbums = []
        console.log(this.props.albumSearchResults)
        if(this.props.albumSearchResults[0].data){
            this.props.albumSearchResults[this.props.albumSearchResults.length - 1].data.forEach((result) =>{
                console.log("show albums: ", showAlbums)
                if(showAlbums.filter(album => album.title === result.album.title).length < 1 && !result.title.includes(result.album.title)){
                    showAlbums.push( {
                        id: result.album.id,
                        title: result.album.title,
                        cover: result.album.cover
                    })
                }
            })
            return showAlbums.map((album) => {
                return <Album album = {album} />
            })
        }else{
            showAlbums = this.props.albumSearchResults
            return showAlbums.map((album) => {
                    return <Album album = {album} />
                })
        }
    }

    renderSongs = () =>{
        let showSongs = []
        console.log(this.props.songSearchResults)
        if(this.props.songSearchResults[0].data){
            this.props.songSearchResults[this.props.songSearchResults.length - 1].data.forEach((result) =>{
                console.log("show songs: ", showSongs)
                if(showSongs.filter(song => song.title === result.title).length < 1){
                    showSongs.push( {
                        id: result.id,
                        title: result.title,
                        album_cover: result.album.cover,
                        artist_name: result.artist.name
                    })
                }
            })
            return showSongs.map((song) => {
                return <Song song = {song} />
            })
        }else{
            showSongs = this.props.songSearchResults
            return showSongs.map((song) => {
                    return <Song song = {song} />
                })
        }
    }

    render(){

        return (
            <React.Fragment>
            <CssBaseline />
            {this.props.signedIn ? 
            <Grid container flexGrow={1} >
            <div className="search-container" style={{marginLeft:"10%", display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", width: "80%"}}>
                {this.props.artistSearchResults.length <1 && this.props.signedIn ? <LoadingBar /> : null}
                
                {this.props.artistSearchResults.length > 0 ? 
                    <div style={{color:"#FFA5B1", marginTop:"3%", fontWeight: "bold"}}>
                        <Typography gutterBottom variant="h3" component="h3">
                            Artists
                        </Typography> 
                        <div style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center"}}>
                            {this.renderArtists()}
                        </div> 
                    </div> 
                    : null}
                 
                {this.props.albumSearchResults.length > 0 ? 
                    <div style={{color:"#FFA5B1", marginTop:"3%", fontWeight: "bold"}}>
                        <Typography gutterBottom variant="h3" component="h3">
                            Albums
                        </Typography> 
                        <div style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center"}}>
                            {this.renderAlbums()}
                        </div>
                    </div> 
                    : null}
                
                {this.props.songSearchResults.length > 0 ? 
                    <div style={{color:"#FFA5B1", marginTop:"3%", fontWeight: "bold"}}>
                        <Typography gutterBottom variant="h3" component="h3">
                            Songs
                        </Typography> 

                        <div style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "center"}}>
                            {this.renderSongs()}
                        </div> 
                    </div> 
                    : null}
            </div>
            </Grid>
            : null}
            </React.Fragment>
        )
    }

}


const msp = state =>{
    return{
        artistSearchResults: state.artistSearchResults,
        albumSearchResults: state.albumSearchResults,
        songSearchResults: state.songSearchResults,
        artists: state.artists,
        albums: state.albums,
        songs: state.songs,
        signedIn: state.signedIn
    }
}


export default connect(msp)(SearchResultsContainer)