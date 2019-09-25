import React from 'react';
import { StatusBar } from 'react-native';
import './config/reactotronConfig';
import Routes from './routes';

const App = () => (
	<>
		<StatusBar barStyle="light-content" backgroundColor="#3A3F3F" />
		<Routes />
	</>
);

export default App;
