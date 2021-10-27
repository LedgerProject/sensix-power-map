import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GridProvider } from './GridProvider';
import { Home, Login } from 'pages';
import { Navbar } from '../Navbar/Navbar';
import { Main } from './Router.style';

function Routes() {
	return (
		<Switch>
			<Route path="/" component={Home} />
			<Route path="/login" component={Login} />
		</Switch>
	);
}

export default function Router() {
	return (
		<Main>
			<BrowserRouter>
				<GridProvider>
					<Navbar />
					<Routes />
				</GridProvider>
			</BrowserRouter>
		</Main>
	);
}
