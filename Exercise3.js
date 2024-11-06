import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercise3 = () => {
    return (
        <View style={styles.Parent}>
            <Text style={[styles.Child, { backgroundColor: 'powderblue' }]}>Child 1</Text>
            <Text style={[styles.Child, { backgroundColor: 'skyblue' }]}>Child 2</Text>
            <Text style={[styles.Child, { backgroundColor: 'steelblue' }]}>Child 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Parent: {
        flexDirection: 'column', // Layout the children vertically
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        height:'100%',
        // justifyContent: 'flex-start', // Align children at the top (default)
        // justifyContent: 'center', // Align children in the center
        // justifyContent: 'flex-end', // Align children at the bottom
        // justifyContent: 'space-between', // Distribute children with space in between
        // justifyContent: 'space-around', // Distribute children with space around them
        // justifyContent: 'space-evenly', // Distribute children with even space between and around them
    },
    Child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
});


export default Exercise3;
