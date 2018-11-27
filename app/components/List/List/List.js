import React from "react";
import { FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const List = () => {
  let list = ["Account Info", "Notifications", "Sync", "About"];

  return (
    <FlatList
      data={list}
      renderItem={list => {
        console.log(list);
        <ListItem list={list} />;
      }}
    />
  );
};

export default List;
