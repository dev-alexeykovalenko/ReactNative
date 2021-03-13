import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Spacer from '../components/Spacer';


const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>

            <Input label="Email" />
            <Spacer/>
            <Input label="Password" />

            <Spacer>
                <Button title="Sign Up"/>
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({});

export default SignupScreen;