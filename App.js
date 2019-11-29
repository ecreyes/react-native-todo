import React from 'react';
import { Button, ThemeProvider } from 'react-native-elements';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <Button title="Hey!" />
      </ThemeProvider>
    );
  }
}

export default App;
