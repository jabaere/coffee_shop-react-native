import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import UserSVG from "../components/svg/User";
import EditSVG from "../components/svg/EditSVG";
import CallSVG from "../components/svg/CallSVG";
import EmailSVG from "../components/svg/EmailSVG";
import LocationSVG from "../components/svg/LocationSVG";
export function Profile() {
  const data = useSelector((state) => state.profile);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>Profile</Text>
      </View>
      {data.map((item, index) => (
        <View style={styles.card} key={index}>
          <View style={styles.img_container}>{getProfileIcon(item.id)}</View>
          <View style={styles.name_container}>
            <Text style={styles.placeholder}>{item.placeholder}</Text>
            {getLabel({ item })}
          </View>
          <View style={styles.edit_icon}>
            <EditSVG color="#324A59" />
          </View>
        </View>
      ))}
    </View>
  );
}

//Display card icon based on card ID
const getProfileIcon = (cardName) => {
  switch (cardName) {
    case "name":
      return <UserSVG color="#324A59" />;
    case "number":
      return <CallSVG color="#324A59" />;
    case "email":
      return <EmailSVG color="#324A59" />;
    case "adress":
      return <LocationSVG color="#324A59" />;
  }
};

//get cardlabel based on card ID
const getLabel = ({ item }) => {
  console.log(item.email);
  switch (item.id) {
    case "name":
      return <Text style={styles.user}>{item.name}</Text>;
    case "number":
      return <Text style={styles.user}>{item.number}</Text>;
    case "email":
      return item?.email ? (
        <Text style={styles.user}>{item?.email}</Text>
      ) : null;
    case "adress":
      return <Text style={styles.user}>{item.adress}</Text>;

    default:
      return null;
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    width: "100%",
    paddingVertical: 23,
  },
  name: {
    color: "#001833",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0.28,
  },
  card: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 38,
    gap: 27,
    alignItems: "center",
  },
  img_container: {
    width: 42,
    height: 42,
    backgroundColor: "#F7F8FB",
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  name_container: {
    flex: 1,
  },
  placeholder: {
    fontSize: 10,
    color: "rgba(0, 24, 51, 0.22)",
    fontFamily: "Poppins_500Medium",
  },
  user: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
  },
  edit_icon: {},
});
