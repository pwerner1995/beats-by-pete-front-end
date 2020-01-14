import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import Album from '../components/album'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Artist from '../components/artist'
import {resetSearchResults} from '../actionCreators'



class SearchResultsContainer extends React.Component {

    renderArtists(){
        let showArtists = []
        console.log(this.props.searchResults)
        this.props.resetSearchResults()
        if(this.props.searchResults[0].data){
            let top5results = [this.props.searchResults[this.props.searchResults.length - 1].data[0], this.props.searchResults[this.props.searchResults.length - 1].data[1], this.props.searchResults[this.props.searchResults.length - 1].data[2], this.props.searchResults[this.props.searchResults.length - 1].data[3], this.props.searchResults[this.props.searchResults.length - 1].data[4]]
            top5results.forEach((result) =>{
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
                return <Artist artist = {artist}/>
            })
        }else{
            showArtists = this.props.searchResults
            return showArtists.map((artist) => {
                return <Artist artist = {artist}/>
            })
        }
    }

    render(){
        console.log("Search Results", this.props.searchResults)
        
        return (
            <React.Fragment>
            <CssBaseline />
            <Grid container flexGrow={1} >
            <div className="search-container">
                Artists:
                {this.props.searchResults.length > 0 ? this.renderArtists() : null}
                
                


            </div>
            </Grid>
            </React.Fragment>
        )
    }

}


const msp = state =>{
    return{
        searchResults: state.searchResults
    }
}

const mdp ={
    resetSearchResults
}

export default connect(msp, mdp)(SearchResultsContainer)