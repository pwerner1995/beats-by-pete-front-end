import React from 'react';
import './App.css';
import Playlist from 'react-mp3-player';
import 'typeface-roboto';


class App extends React.Component {
  
    state = {
        albums: [],
        artists: [],
        songs: [],
        playlist: [],
        playlistOverideStylingOpts: {
            offset : {
              left : 0
            },
            breakpoint : {
              maxWidth : 768
              }
          }
    }


    componentDidMount(){

        fetch("http://localhost:3000/api/v1/songs",{
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({songs: [...data]})
            
        })
        .then(() => this.create_playlist())   
        
        fetch("http://localhost:3000/api/v1/artists",{
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
        .then(resp => resp.json())
        .then(data => this.setState({artists: [...data]}))  
        
        fetch("http://localhost:3000/api/v1/albums",{
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Access-Control-Allow-Credentials': 'true'
            }
        })
        .then(resp => resp.json())
        .then(data => this.setState({albums: [...data]}))

    }

    create_playlist = () => {
        let newPlaylist = []
        this.state.songs.forEach(song => {
            newPlaylist = [...newPlaylist, {
                img: song.album_cover,
                name: song.title,
                desc: song.artist_name,
                src: song.preview
            }]
            
        });
        this.setState({
            playlist: newPlaylist
        }) 
    }


    render(){
        console.log("Songs: ", this.state.songs.length)
        console.log("Artists: ", this.state.artists.length)
        console.log("Albums:", this.state.albums.length)
        
        return (
            <div className="App">
                {/* <MusicPlayer playlist={this.state.playlist} /> */}
                {/* <h1 style ={{fontFamily: "roboto"}}>Hey</h1> */}
                <Playlist tracks={this.state.playlist.length > 0 ? this.state.playlist : [{img: "", name: "", desc: "", src: ""}]} opts={this.state.playlistOverideStylingOpts} />
                
            </div>
        );

    }
}

export default App;
