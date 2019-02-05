import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import { TextInput, Button, Title, withTheme } from 'react-native-paper';

import styles from '../stylesheet/login.stylesheet';

let AuthenticatorUI = (props)=>{
    
    return(
        <View style={styles.container}>
            <Title style={styles.title}>LOGIN</Title>
            <Title style={{fontFamily: props.theme.fonts.ligth}}>Ingresar a tu cuenta</Title>
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
                justifyContent: 'space-evenly',
                ...styles.formControl
            }}>
                <TouchableHighlight>
                    <Button onPress={ ()=> props.mainAction() } mode="contained">
                        {props.mainButtonTitle}
                    </Button>
                </TouchableHighlight>
                    
                <TouchableHighlight>
                    <Button onPress={ ()=> props.navigationAction() } mode="outlined">
                        {props.secondaryButtonTitle}
                    </Button>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default withTheme(AuthenticatorUI); // insertar prop theme