import React from 'react';
import './App.css';
import Playlist from 'react-mp3-player';
import 'typeface-roboto';
import { connect } from 'react-redux';
import { fetchArtists, fetchAlbums, fetchSongs, setPlaylist } from './actionCreators'
import NavBar from './components/navBar'
import { Route, Switch } from 'react-router-dom'
import ArtistContainer from './containers/artistContainer'


class App extends React.Component{

    componentDidMount(){

        // console.log(this.props)
        this.props.fetchArtists()
        this.props.fetchAlbums()
        this.props.fetchSongs()
        // console.log("Testing songs:",this.props.songs)
        
    }


    conditionalPlaylist = () => {
        // console.log(this.props.songs[0])
        this.props.songs[0].forEach(song => {
            this.props.setPlaylist(song) 
        })
    }

    render(){
        // console.log("Songs: ", this.props.songs)
        // console.log("Artists: ", this.props.artists)
        // console.log("Albums:", this.props.albums)
        // console.log("Playlist:", this.props.playlist)
    
        return (
            <div className="App">
                    {(this.props.songs.length > 0 && this.props.playlist.length === 0) ? this.conditionalPlaylist() : null}
                    <NavBar />
                    <Switch>
                        <Route path = "/artists" render={() => <ArtistContainer />}/>
                    </Switch>


                    <Playlist tracks={this.props.playlist.length > 0 ? this.props.playlist : [{img: "", name: "", desc: "", src: ""}]} opts={this.props.playlistOverideStylingOpts} />
                    
            </div>
            );
    }
} // end of App component


    const msp = state =>{
        return{
            songs: state.songs,
            artists: state.artists,
            albums: state.albums,
            playlist: state.playlist,
            playlistOverideStylingOpts: state.playlistOverideStylingOpts
        }
    }

    const mdp = dispatch => {
        return {
          fetchArtists: () => dispatch(fetchArtists()),
          fetchAlbums: () => dispatch(fetchAlbums()),
          fetchSongs: () => dispatch(fetchSongs()),
          setPlaylist: (song) => dispatch(setPlaylist(song))
        }
      }

export default connect(msp, mdp)(App);
