// import libraries
import React from 'react';
import { View } from 'react-native';

// create component
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

// component styling
const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row', // property under the JustifyContent Rule. 
        borderColor: '#ddd',
        position: 'relative'
    }
};

// make available to other components
export default CardSection;