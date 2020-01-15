import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import Album from '../components/album'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Artist from '../components/artist'
import Song from '../components/song'


// import Album from '../components/album'
// import {openSearchForm} from '../actionCreators'



class SearchResultsContainer extends React.Component {

    renderArtists = () =>{
        let showArtists = []
        console.log(this.props.artistSearchResults)
        if(this.props.artistSearchResults[0].data){
            // let top5results = [this.props.artistSearchResults[this.props.artistSearchResults.length - 1].data[0], this.props.artistSearchResults[this.props.artistSearchResults.length - 1].data[1], this.props.artistSearchResults[this.props.artistSearchResults.length - 1].data[2], this.props.artistSearchResults[this.props.artistSearchResults.length - 1].data[3], this.props.artistSearchResults[this.props.artistSearchResults.length - 1].data[4]]
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
            // debugger
            showArtists = this.props.artistSearchResults
            return showArtists.map((array) => {
                return array.map((artist) => {
                    return <Artist artist = {artist} />
                })
            })
        }
    }

    renderAlbums = () =>{
        let showAlbums = []
        console.log(this.props.albumSearchResults)
        if(this.props.albumSearchResults[0].data){
            // let top5results = [this.props.albumSearchResults[this.props.albumSearchResults.length - 1].data[0], this.props.albumSearchResults[this.props.albumSearchResults.length - 1].data[1], this.props.albumSearchResults[this.props.albumSearchResults.length - 1].data[2], this.props.albumSearchResults[this.props.albumSearchResults.length - 1].data[3], this.props.albumSearchResults[this.props.albumSearchResults.length - 1].data[4]]
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
            return showAlbums.map((array) =>{
                return array.map((album) => {
                    return <Album album = {album} />
                })
            })
        }
    }

    renderSongs = () =>{
        let showSongs = []
        console.log(this.props.songSearchResults)
        if(this.props.songSearchResults[0].data){
            // console.log("first song", this.props.songSearchResults[this.props.songSearchResults.length - 1].data[0])
            // let top5results = [this.props.songSearchResults[this.props.songSearchResults.length - 1].data[0], this.props.songSearchResults[this.props.songSearchResults.length - 1].data[1], this.props.songSearchResults[this.props.songSearchResults.length - 1].data[2], this.props.songSearchResults[this.props.songSearchResults.length - 1].data[3], this.props.songSearchResults[this.props.songSearchResults.length - 1].data[4]]
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
            // console.log()
            showSongs = this.props.songSearchResults
            return showSongs.map((array)=>{
                return array.map((song) => {
                    return <Song song = {song} />
                })
            })
        }
    }



    render(){
        // console.log("Search Results", this.props.artistSearchResults)
        // console.log("Artists: ", this.props.artists)
        // console.log("Albums: ", this.props.albums)
        // console.log("Songs: ", this.props.songs)
        return (
            <React.Fragment>
            <CssBaseline />
            <Grid container flexGrow={1} >
            <div className="search-container">
                
                {this.props.artistSearchResults.length > 0 ? <div>Artists: {this.renderArtists()}</div> : null}
                 
                {this.props.albumSearchResults.length > 0 ? <div>Albums: {this.renderAlbums()}</div> : null}
                
                {this.props.songSearchResults.length > 0 ? <div>Songs: {this.renderSongs()}</div> : null}
                


            </div>
            </Grid>
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
        songs: state.songs


    }
}

// const mdp ={
//     openSearchForm
// }


export default connect(msp)(SearchResultsContainer)