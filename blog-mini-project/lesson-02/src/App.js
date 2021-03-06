import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './screens/IndexScreen';

const navigator = createStackNavigator({
    Index: IndexScreen
}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'Blogs',
        cardStyle: {
            backgroundColor: 'white'
        }
    }
});

const App = createAppContainer(navigator);

export default () => {
    return <App/>;
}