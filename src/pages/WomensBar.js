import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, View } from 'react-native';
import * as Font from 'expo-font';

import Weights from '../components/Weights';
import Header from '../components/Header';

const WomensBar = () => {
    return (
            <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={{ flexGrow: 1, }}>
        <View>
            <Header />
            <Weights passedStyle={{ backgroundColor: '#F08080' }} title="95lb" weights="Put on a 25lb Plate"/>
            <Weights passedStyle={{ backgroundColor: '#F08080' }} title="115lb" weights="Put on a 35lb Plate"/>
            <Weights passedStyle={{ backgroundColor: '#F08080' }} title="135lb" weights="Put on a 45lb Plate"/>
        </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F08080'
    }
})

export default WomensBar;