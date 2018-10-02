import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const DailyMealGrid = () => (
    <View style={styles.container}>
        <View style={styles.row1}>
            <View style={styles.column1}>
                <Text>Holder</Text>
            </View>
            <View style={styles.column2}>
                <Text>Holder</Text>
            </View>
        </View>
        <View style={styles.row2}>
            <View style={styles.column1}>
                <Text>Holder</Text>
            </View>
            <View style={styles.column2}>
                <Text>Holder</Text>
            </View>
        </View>
        <View style={styles.row3}>
            <View style={styles.column1}>
                <Text>Holder</Text>
            </View>
            <View style={styles.column2}>
                <Text>Holder</Text>
            </View>
        </View>
    </View>
);

DailyMealGrid.propTypes = {

};

export default DailyMealGrid;