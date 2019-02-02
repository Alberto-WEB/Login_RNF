import React, {Component} from 'react';
import firebase from 'react-native-firebase';

import SignUp from '../components/SignUp';

export default class SignUpScreen extends Component{

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

    createUser = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(response=>{
            let user = response.user;
            console.log(user);
            
        })
        
    }

    render(){
        return (
           <SignUp setPassword={this.setPassword} 
                   setEmail={this.setEmail} 
                   createUser={this.createUser}/>
          );
    }
}