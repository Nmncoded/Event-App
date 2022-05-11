import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'

import './stylesheets/index.scss';

import "./firebase/app"

import store from './redux/store';
import {Provider} from 'react-redux';

const root = createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
)
