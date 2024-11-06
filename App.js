import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.parent}>
            <View style={[{ backgroundColor: 'skyblue' }, styles.child]}>
                <Text style={styles.text}>Square 1</Text>
            </View>
            <View style={[{ backgroundColor: 'lightgreen' }, styles.child]}>
                <Text style={styles.text}>Square 2</Text>
            </View>
            <View style={[{ backgroundColor: 'red' }, styles.child]}>
                <Text style={styles.text}>Square 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    child: {
        width: 80,
        height: 80,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    }
});

export default App;

