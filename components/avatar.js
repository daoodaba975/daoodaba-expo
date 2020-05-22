import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Avatar(){
    return(
        <Image source={require('../assets/daooda.jpg')} style={styles.img} />
    )
}

const styles = StyleSheet.create ({
    img: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 50,
    alignSelf: 'center'
    }
})