import React from 'react';
import { Container } from './Login.style';
import { useMount } from 'react-use';
import { firebase } from '@gdi/platformer';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

let ui: any;

export function initUI() {
    if (ui) {
        return ui;
    }

    ui = new firebaseui.auth.AuthUI(firebase.value.auth);
    return ui;
}
