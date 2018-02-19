// import libraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// create component (class-based component)
class AlbumList extends Component {

    state = { albums: [] }; // initial empty state

    componentWillMount() { // lifecycle method - (about to be rendered)
        axios.get('https://rallycoding.herokuapp.com/api/music_albums#')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() { // render albums to screen (from JSON API)
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album}/>
        );
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

// make component available to others
export default AlbumList;