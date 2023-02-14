import * as serviceWorker from './serviceWorker';

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ReactSocialNetworkApp from "./App";

const root = createRoot(document.getElementById('root'));
root.render(<ReactSocialNetworkApp />)
// createRoot(<ReactSocialNetworkApp />, document.getElementById('root'));


// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
