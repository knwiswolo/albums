// import all needed dependencies (libraries)
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create component
const App = () => {
    return (
        <View style={styles.viewStyle}>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};

// component styling
const styles = {
    viewStyle: {
        flex: 1
    }
};
// render component to the device
AppRegistry.registerComponent('albums', () => App);