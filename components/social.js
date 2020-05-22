import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function Social(){
    return(
        <View style={styles.rsContainer}>
            <TouchableOpacity style={styles.rsImage}>
                <Image source={require('../assets/icons8-facebook.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rsImage}>
                <Image source={require('../assets/icons8-twitter.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rsImage}>
                <Image source={require('../assets/icons8-github.png')}/>
            </TouchableOpacity>    
        </View>
    )
}

const styles = StyleSheet.create ({
    rsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    rsImage: {
        width: 50,
        height: 50,
        margin: 20
    }
})