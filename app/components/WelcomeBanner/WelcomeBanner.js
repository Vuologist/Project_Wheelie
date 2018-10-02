import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const WelcomeBanner = ({ name }) => (
    <View style={styles.container}>
        <Text style={styles.user}>
            HI {name}
        </Text>
        <Text style={styles.question}>
            WHAT DO WE HAVE FOR TODAY?
        </Text>
    </View>
);

export default WelcomeBanner;