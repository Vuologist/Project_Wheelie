import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Home from "./screens/Home";

EStyleSheet.build({
  $primaryBlue: "#B6D397",

  $outline: 1
});

export default () => <Home />;
