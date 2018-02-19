// import libraries
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// create component
const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album; // destructuring out the properties of album (reduces references to 'album')
    const { 
        headerContentStyle, 
        albumNameStyle, 
        thumbnailStyle, 
        thumbnailContainerStyle,
        albumImageStyle,
    } = styles; // destructuring styles from styles

    return (
        <Card>
            <CardSection style={albumNameStyle}>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image}} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={albumNameStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={albumImageStyle}
                    source={{ uri: image}}/>
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

// component styling
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    albumNameStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

// make available to other components
export default AlbumDetail;