import React from 'react';
import { connect } from "react-redux"
import store from './store'


// function postSongs(songs){
//     console.log("SONGS: ", songs)
//     songs.forEach((song) => {
//         fetch("http://localhost:3000/api/v1/songs",{method: "POST",
//             headers:{
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 "Access-Control-Allow-Origin": "http://localhost:3000",
//                 'Access-Control-Allow-Credentials': 'true'
//             },
//             body: JSON.stringify({
//                 song:{

//                     title: song.title,
//                     duration: song.duration,
//                     preview: song.preview
//                 }
//             })
//         })
//         .then((resp) => {
//             console.log(resp)
//         })
//     })
// }
// function postArtists(artists){
//     console.log("ARTISTS: ", artists)
//     artists.forEach((artist) => {
//         fetch("http://localhost:3000/api/v1/artists",{method: "POST",
//             headers:{
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 "Access-Control-Allow-Origin": "http://localhost:3000",
//                 'Access-Control-Allow-Credentials': 'true'
//             },
//             body: JSON.stringify({
//                 artist: {
//                     name: artist.name,
//                     picture: artist.picture
//                 }
//             })
//         })
//         .then((resp) => {
//             console.log(resp)
//         })
//     })
// }   
// function postAlbums(albums){
//     console.log("ALBUMS: ", albums)
//     albums.forEach((a) => {
//         fetch("http://localhost:3000/api/v1/albums",{method: "POST",
//             headers:{
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 "Access-Control-Allow-Origin": "http://localhost:3000",
//                 'Access-Control-Allow-Credentials': 'true'
//             },
//             body: JSON.stringify({
//                 album:{
//                     title: a.album.title,
//                     cover: a.album.cover,
//                     artist: a.artist
//                 }
//             })
//         })
//         .then((resp) => {
//             console.log(resp)
//         })
//     })
// }



export function postSearchResults(results){
    // console.log(props)
    const state =  store.getState()
    console.log("state: ",state)
    let songs = []
    let artists = []
    let albums = []
    results.data.forEach((song) => {
        if(state.songs[0].filter(s => s.title.toUpperCase().includes(song.title.toUpperCase())).length < 1 && songs.filter(s => s.title.toUpperCase().includes(song.title.toUpperCase())).length < 1){
            songs.push(song)
            if(state.artists[0].filter(a => a.name.toUpperCase().includes(song.artist.name.toUpperCase())).length < 1 && artists.filter(a => a.name.toUpperCase().includes(song.artist.name.toUpperCase())).length < 1){
                artists.push(song.artist)
            }
            if(state.albums[0].filter(a => a.title.toUpperCase().includes(song.album.title.toUpperCase())).length < 1 && albums.filter(a => a.album.title.toUpperCase().includes(song.album.title.toUpperCase())).length < 1){
                
                albums.push({album: song.album, artist: song.artist.name})
            }
        }
    })
    // postArtists(artists)
    // .then(postAlbums(albums))
    // .then(postSongs(songs))
    
}

// function msp(state){
//     return {
//         artists: state.artists,
//         songs: state.songs,
//         albums: state.albums
//     }
// }

