import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { View } from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ThemeProvider>
                <View style={{ flex: 1 }}>
                </View>
            </ThemeProvider>
        );
    }
}

export default Home;