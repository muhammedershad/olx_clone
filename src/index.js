import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/Context';
import firebase from './firebase/config';
import Contxt from './store/Context';

ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}} >
        <Contxt>
            <App />
        </Contxt>
    </FirebaseContext.Provider>
    , document.getElementById('root'));
