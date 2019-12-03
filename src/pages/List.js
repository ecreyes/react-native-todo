import React from 'react';
import {View,Text} from 'react-native';

class List extends React.Component{
    static navigationOptions = {
        title: 'List',
    };
    render(){
        return(
            <View style={{flex:1}}>
                <Text>List page</Text>
            </View>
        );
    }
}

export default List;