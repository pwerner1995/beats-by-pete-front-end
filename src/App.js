import React from 'react';
import './App.css';
import Playlist from 'react-mp3-player';
import Player from 'react-mp3-player';
import 'typeface-roboto';
import { connect } from 'react-redux';
import { fetchArtists, fetchAlbums, fetchSongs, setPlaylist, fetchUsers } from './actionCreators'
import NavBar from './components/navBar'
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import { Route, Switch } from 'react-router-dom'
import ArtistContainer from './containers/artistContainer'
import AlbumContainer from './containers/albumContainer'
import SongContainer from './containers/songContainer'
import SearchFrom from './components/searchForm'
import SearchResultsContainer from './containers/searchResultsContainer'
import ProfileContainer from './containers/profileContainer'


class App extends React.Component{

    componentDidMount(){

        // console.log(this.props)
        this.props.fetchArtists()
        this.props.fetchAlbums()
        this.props.fetchSongs()
        this.props.fetchUsers()
        // this.props.SetUser(this.props.users[0])
        // console.log("Testing songs:",this.props.songs)
        
    }


    

    render(){
        // console.log("Songs: ", this.props.songs)
        // console.log("Artists: ", this.props.artists)
        // console.log("Albums:", this.props.albums)
        // console.log("Playlist:", this.props.playlist)
    
        return (
            <div className="App">
                    {/* {(this.props.songs.length > 0 && this.props.playlist.length === 0) ? this.conditionalPlaylist() : null} */}
                    
                    {!this.props.signedIn && !this.props.signUp ? <SignIn /> : null}
                    {!this.props.signedIn && this.props.signUp ? <SignUp /> : null}
                    {this.props.signedIn ? <NavBar /> : null}
                    {this.props.search ? <SearchFrom /> : null}
                    {!this.props.search && this.props.signedIn? <Switch>
                        <Route path = "/artists" render={() => <ArtistContainer />}/>
                        <Route path = "/albums" render={() => <AlbumContainer />}/>
                        <Route path = "/songs" render={() => <SongContainer />}/>
                        <Route path = "/profile" render={() => <ProfileContainer />}/>
                        {/* <Route path = "/signup" render={() => <SignUp />}/> */}

                    </Switch> : <SearchResultsContainer />}
                    


                    {this.props.player ? <Playlist tracks={this.props.playlist.length > 0 ? this.props.playlist : [{img: "", name: "", desc: "", src: ""}]} opts={this.props.playlistOverideStylingOpts} style={{marginTop:"5%"}}/> : null }
                    
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
            playlistOverideStylingOpts: state.playlistOverideStylingOpts,
            search: state.search,
            searchResults: state.searchResults,
            player: state.player,
            signedIn: state.signedIn,
            users: state.users,
            signUp: state.signUp
        }
    }

    const mdp = {
        // return {
        //   fetchArtists: () => dispatch(fetchArtists()),
        //   fetchAlbums: () => dispatch(fetchAlbums()),
        //   fetchSongs: () => dispatch(fetchSongs()),
        //   fetchUsers: () => dispatch(fetchUsers()),
        //   setPlaylist: (song) => dispatch(setPlaylist(song)),
        //   setUser: () => dispatch(setUser())
        // }
        
          fetchArtists,
          fetchAlbums,
          fetchSongs,
          fetchUsers,
          setPlaylist
      }

export default connect(msp, mdp)(App);
