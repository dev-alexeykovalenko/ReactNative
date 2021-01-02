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

export default createAppContainer(navigator);