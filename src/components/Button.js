// import necessary libraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// create component
const Button = (props) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity 
            onPress={props.onPress} 
            style={buttonStyle}>
            <Text style={textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

// component styling
const styles = {
    buttonStyle: {
        flex: 1, // expand to fill as much content as possible
        alignSelf: 'stretch', // position element using flexbox rules (stretch to fill container)

        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600', // bold
        paddingTop: 10,
        paddingBottom: 10
    }
};

// make available to other components
export default Button;