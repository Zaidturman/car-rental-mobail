import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Setting = () => {
    return (
        <View style={styles.setting}>
            <Text>Setting</Text>
            {/* Display notification content here */}
        </View>
    );
};
const styles = StyleSheet.create({
    setting:{
        marginTop:40,
    }
});
export default Setting;
