import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Title from './Title.js';
import Confirm from './Confirm.js';
import Home from './Home.js';

function App() {
	return (
		<div>
			<Route exact path='/' component={Confirm} />
			<Route path='/party' component={Title} />
			<Route path='/home' component={Home} />
		</div>
	);
}

export default App;
