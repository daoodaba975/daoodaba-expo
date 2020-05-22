import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CallButton(){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.apl}>Appelez</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    button: {
        marginTop: 20,
        paddingHorizontal: 100,
        paddingVertical: 20,
        backgroundColor: '#1a535c',
        borderRadius: 10
    },
    apl: {
        fontSize: 18,
        color: '#ccc',
        fontWeight: 'bold',
        fontFamily: 'adventpro-bold'
    }
})