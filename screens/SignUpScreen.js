import React, {Component} from 'react';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import { login } from '../actions/user';

import AuthenticatorUI from '../components/AuthenticatorUI';

class SignUpScreen extends Component{

    constructor(props){
        super(props);
    }
    


    createUser = async (email, password) => {
        try {
            let response = await firebase.auth().createUserWithEmailAndPassword(email, password)

            let {user} = response;
            this.props.login(user);
            console.log(user);
        } catch (error) {
            console.log(error);
            
        }
        
    }

    render(){
        return (
           <AuthenticatorUI 
                   setPassword={this.setPassword} 
                   setEmail={this.setEmail} 
                   mainButtonTitle="Crear Cuenta"
                   secondaryButtonTitle="Ya tengo cuenta"
                   navigationAction={()=>{ this.props.navigation.navigate('Login') }}
                   mainAction={this.createUser}/>
          );
    }
}

export default connect(
    (state) => ({ user: state.user }),
    {
        login: login
    }
)(SignUpScreen);