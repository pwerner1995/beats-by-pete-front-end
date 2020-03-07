// import React from 'react';
// import { connect } from "react-redux"
import store from './store'


export function postSearchResults(results){
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
   
}


