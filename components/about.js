import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function About(){
    return(
        <View>
            <Text style={styles.abt1}>Daouda BA</Text>
            <Text style={styles.abt2}>Développeur Web/mobile</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    abt1: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    abt2: {
        textAlign: 'center',
        fontSize: 16,
        color: '#aaa'
    }
})