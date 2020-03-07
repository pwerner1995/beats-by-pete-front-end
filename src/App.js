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
import AlbumPage from './components/albumPage'
import ArtistPage from './components/artistPage'
import SongPage from './components/songPage'
import MattsSlaps from './containers/mattsSlaps'



class App extends React.Component{

    componentDidMount(){
        this.props.fetchArtists()
        this.props.fetchAlbums()
        this.props.fetchSongs()
        this.props.fetchUsers() 
    }


    

    render(){
    
        return (
            <div className="App">                    
                    {!this.props.signedIn && !this.props.signUp ? <SignIn /> : null}
                    {!this.props.signedIn && this.props.signUp ? <SignUp /> : null}
                    {this.props.signedIn ? <NavBar /> : null}
                    {this.props.search ? <SearchFrom /> : null}
                    {!this.props.search && this.props.signedIn? <Switch>
                        <Route path="/albums/:id" render={(routerProps) => {
                            return <AlbumPage  {...routerProps}/>
                            }}/> 
                        <Route path="/artists/:id" render={(routerProps)=> <ArtistPage {...routerProps} />}/>
                        <Route path="/songs/:id" render={(routerProps)=> <SongPage {...routerProps}/>}/>
                        <Route exact path = "/artists" render={() => <ArtistContainer />}/>
                        <Route exact path = "/albums" render={() => <AlbumContainer />}/>
                        <Route exact path = "/songs" render={() => <SongContainer />}/>
                        <Route exact path = "/slaps" render={() => <MattsSlaps />}/>
                        <Route path = "/profile" render={() => <ProfileContainer />}/>
                        <Route exact path = "/home" render={() => <ArtistContainer />}/>
                        <Route exact path = "/" render={() => <ArtistContainer />}/>
                        <Route exact path = "" render={() => <ArtistContainer />}/>

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
          fetchArtists,
          fetchAlbums,
          fetchSongs,
          fetchUsers,
          setPlaylist
      }

export default connect(msp, mdp)(App);
