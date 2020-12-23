import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const ComponentsScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>This is HomeScreen</Text>
            <Button
                onPress={() => console.log('Button presed')} 
                title="Go to Components Demo"
            />
            <TouchableOpacity onPress={() => console.log('List Presed')}>
                <Text>Go to List Demo</Text>
                <Text>Go to List Demo</Text>
                <Text>Go to List Demo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;