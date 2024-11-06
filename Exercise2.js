import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Exercise2 = () => {
    return (
        <View style={styles.container}>

            <View>
                <Text style={[styles.greenBox, styles.boxText, styles.title]}>Who we are</Text>
            </View>
            <View>
                <Text style={[styles.greenBox, styles.boxText]}>Our People</Text>
            </View>
            <View>
                <Text style={[styles.greenBox, styles.boxText]}>Our Campus</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
    },
    boxText: {
        textAlign: 'center',
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
    },
});

export default Exercise2;
