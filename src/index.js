import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'

import App from './App';
import './index.css';

firebase.initializeApp({
    apiKey: "AIzaSyD73S0hw6qRCchb6OA8OpJZMDzVsLgAPhM",
    authDomain: "prueba-6761a.firebaseapp.com",
    databaseURL: "https://prueba-6761a.firebaseio.com",
    projectId: "prueba-6761a",
    storageBucket: "prueba-6761a.appspot.com",
    messagingSenderId: "769974830718"
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
