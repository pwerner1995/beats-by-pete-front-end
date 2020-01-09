import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import Artist from '../components/artist'

class ArtistContainer extends React.Component {


    render(){
        
        return (
            <div className="artist-container">
                <Switch>
                    <Route path="/artists" render={() => {
                        if(this.props.artists.length > 0) {
                            return (this.props.artists[0].map(artist => {    
                                console.log("artist container",artist)
                                return <Artist artist = {artist} albums = {this.props.albums}/>
                            }))
                        }
                    }}/>
                </Switch>
                
                


            </div>
        )
    }

}


const msp = state =>{
    return{
        artists: state.artists,
        albums: state.albums
    }
}

export default connect(msp)(ArtistContainer)