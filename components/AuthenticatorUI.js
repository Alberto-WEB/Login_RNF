import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import { TextInput, Button } from 'react-native-paper';

import styles from '../stylesheet/login.stylesheet';

export default (props)=>{
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.formControl}
                label='Ingresa tu Email'
                onChangeText={ (text)=> props.setEmail(text) } 
            />

            <TextInput 
                style={styles.formControl}
                label='Ingresa tu Password'
                onChangeText={ (text)=> props.setPassword(text) } 
            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
                <TouchableHighlight>
                    <Button onPress={ ()=> props.mainAction() } mode="contained">
                        {props.mainButtonTitle}
                    </Button>
                </TouchableHighlight>
                    
                <TouchableHighlight>
                    <Button onPress={ ()=> props.navigationAction() } mode="contained">>
                        {props.secondaryButtonTitle}
                    </Button>
                </TouchableHighlight>
            </View>
        </View>
    );
}