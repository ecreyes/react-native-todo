import React from 'react';

//redux
import { Provider } from 'react-redux'
import store from './store';

//react navigation
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//react native elements
import { Icon } from 'react-native-elements';

//Pages
import Home from './pages/Home';
import List from './pages/List';

const MainNavigator = createBottomTabNavigator(
	{
		Home: { screen: Home },
		List: { screen: List },
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = 'home';
				} else if (routeName === 'List') {
					iconName = 'assignment';
				}

				// You can return any component that you like here!
				return <Icon name={iconName} color={tintColor} />;
			},
		}),
		tabBarOptions: {
			activeTintColor: 'white',
			inactiveTintColor: 'gray',
			activeBackgroundColor: 'rgba(47,44,60,1)',
			inactiveBackgroundColor: 'rgba(47,44,60,1)'
		},
	});

const MyApp = createAppContainer(MainNavigator);

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<MyApp />
			</Provider>
		);
	}
}

export default App;
