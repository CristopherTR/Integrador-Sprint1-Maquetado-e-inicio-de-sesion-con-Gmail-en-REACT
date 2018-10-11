import React, { Component } from 'react';
import firebase from 'firebase';

import './App.css';

//import Navigation from './components/Navigation';

class App extends Component{
    constructor (){
        super();
        this.state = {
            user: null
        };
        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.renderLoginButton = this.renderLoginButton.bind(this);
    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.setState({user});
        });
    }
    
    handleAuth(){
        const provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesion`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
        
    }
    
    handleLogout(){
        firebase.auth().signOut()
        .then(result => console.log(`${result.user.email} ha cerrado sesion`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
        
    }
    
    renderLoginButton(){
        if(this.state.user){
            return (
                <nav className="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" >R.F Android</a>
                    </div>
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a>
                                <span>
                                <img class="photoURL" src={this.state.user.photoURL} alt={this.state.user.displayName} />
                                </span>
                                {this.state.user.displayName}</a>
                            </li>
                            <li>
                                <a className="logout" onClick={this.handleLogout}><span ></span>Salir</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                
           
                )

        }else{
                return(
                    
            <button className="botonG" onClick={this.handleAuth}><i class="fab fa-google"/>Login con Google</button>            
        );
        }
    }
    
    render(){
        return(
        <div className="App">
            <p className="App-intro">
            <h1>RECONOCIMIENTO FACIAL</h1>
            { this.renderLoginButton() }
            </p>
        </div>
        );
    }
}

export default App;
