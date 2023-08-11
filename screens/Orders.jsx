import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useSelector, useDispatch } from "react-redux";
import RenderORderItem from "../components/RenderORderItem";

//create ongoing orders tab
const OnGoingOrders = ({ orderData, userData }) => (
  console.log(orderData),
  console.log(userData),
  (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.sub_container}>
        {/* {[1, 2, 3].map((item) => (
        <RenderORderItem />
      ))} */}
        <FlatList
          data={orderData}
          renderItem={({ item }) => (
            <RenderORderItem data={item} userData={userData} />
          )}
          keyExtractor={(item) => item.id}
          style={{ gap: 20 }}
        />
      </View>
    </View>
  )
);
// create orders history tab
const OrderHistory = () => (
  <View style={{ flex: 1, backgroundColor: "#fff" }} />
);

export function Orders() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  //create routes object

  const [routes] = useState([
    { key: "ongoing", title: "On going" },
    { key: "history", title: "History" },
  ]);
  //get data about orders
  const orderData = useSelector((state) => state.orderList);
  //get information about user
  const userData = useSelector((state) => state.profile);
  //filter data with id to get adress object
  const user = userData.filter((item) => item.id === "adress")[0];
  // create render object
  const renderScene = SceneMap({
    ongoing: () => <OnGoingOrders orderData={orderData} userData={user} />,
    history: OrderHistory,
  });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={{
            backgroundColor: "#fff",
          }}
          activeColor="#001833"
          inactiveColor="#D8D8D8"
          indicatorContainerStyle={{
            marginHorizontal: 40,
          }}
          indicatorStyle={{
            backgroundColor: "#324A59",
            width: 93,
          }}
          labelStyle={{
            fontSize: 14,
            fontFamily: "Poppins_500Medium",
            textTransform: "capitalize",
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  sub_container: {
    width: "80%",
    alignSelf: "center",
  },
  status_sub_container: {
    flexDirection: "row",
    gap: 11,
  },
});
