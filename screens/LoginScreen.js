import React, {Component} from 'react';
import firebase from 'react-native-firebase';


import AuthenticatorUI from '../components/AuthenticatorUI';

export default class LoginScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    setEmail = (email) => {
        this.setState({
            email: email
        })
    }

    setPassword = (password) => {
        this.setState({
            password: password
        })
    }

    login = async () => {
        try {
            let response = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)

            let {user} = response;
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
                   mainButtonTitle="Ingresar"
                   mainAction={this.login}/>
          );
    }
}