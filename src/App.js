import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Title from './Title.js';
import Confirm from './Confirm.js';
import Home from './Home.js';

function App() {
	const adjustVh = window.innerHeight * 0.01;
	return (
		<div>
			<Route exact path='/' render={() => <Confirm adjustVh={adjustVh} />} />
			<Route path='/party' render={() => <Title adjustVh={adjustVh} />} />
			<Route path='/home' render={() => <Home />} />
		</div>
	);
}

export default App;
