import React, { Component } from 'react';
import firebase from 'react-native-firebase';

import HomeComponent from '../components/HomeComponent';

import { View, Text } from 'react-native';

import { IconButton } from 'react-native-paper';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

export default class HomeScreen extends Component{

    static navigationOptions= ({navigation})=>{
       return{
           headerStyle:{
               backgroundColor: navigation.getParam('backgroundColor') || '#222'
           },
           headerTitleStyle: {
               color: 'white'
           },
           headerRight: (
               <IconButton 
                   icon="power-settings-new"
                   color='white'
                   onPress={
                       ()=>{
                           firebase.auth().signOut();
                           navigation.navigate('Auth');
                           
                       }
                   }
                        
               />
           ),
       }
    } 
    
    setNavigationColor = (color) =>{
        this.props.navigation.setParams({
            backgroundColor: color
        })
    }

    render(){
        return(
            <HomeComponent setNavigationColor={this.setNavigationColor}/>
        );
    }
}