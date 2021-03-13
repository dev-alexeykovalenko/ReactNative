import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ComponentsScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>This is HomeScreen</Text>
            <Button
                onPress={() => console.log('Button presed')} 
                title="Go to Components Demo"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;