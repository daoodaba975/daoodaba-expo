import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function About(){
    return(
        <View>
            <Text style={styles.abt1}>Daouda A</Text>
            <Text style={styles.abt2}>Développeur Web/mobile</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    abt1: {
        fontFamily: 'adventpro-bold',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    abt2: {
        fontFamily: 'adventpro-regular',
        textAlign: 'center',
        fontSize: 16,
        color: '#aaa'
    }
})