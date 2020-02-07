import React from 'react';
import { Container, Body, Content, Text, Button } from 'native-base';
import { ScrollView } from 'react-native';
import * as Font from 'expo-font';

import Weights from '../components/Weights';

const MensBar = ({ navigation }) => {
 

    return (
        <Container style={{ flex: 2, justifyContent: 'center' }}>
            <ScrollView>
            <Weights title="95lb" weights="Put on a 25lb Plate" onPress={() => navigation.navigate('Main')} />
            <Weights title="115lb" weights="Put on a 35lb Plate"/>
            <Weights title="135lb" weights="Put on a 45lb Plate"/>
            <Weights title="155lb" weights="Put on 45lb and 10lb Plates"/>
            <Weights title="185lb" weights="Put on 45lb and 10lb Plates"/>
            <Weights title="205lb" weights="Put on 45lb and 10lb Plates"/>
            <Weights title="215lb" weights="Put on 45lb and 10lb Plates"/>
            <Weights title="225lb" weights="Put on 45lb and 10lb Plates"/>
            </ScrollView>
        </Container>
    );
  }
  
  export default MensBar;