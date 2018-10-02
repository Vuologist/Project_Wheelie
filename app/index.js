import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
    $primaryBlue: '#ff77bf',

    $outline: 0,
});

export default () => <Home />;