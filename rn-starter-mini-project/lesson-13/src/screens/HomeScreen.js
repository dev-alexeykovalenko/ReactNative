import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyle}>This is HomeScreen</Text>
            <Button
                onPress={() => navigation.navigate('Components')} 
                title="Go to Components Demo"
            />
            <Button
                title="Go to List Demo"
                onPress={() => navigation.navigate('List')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default HomeScreen;