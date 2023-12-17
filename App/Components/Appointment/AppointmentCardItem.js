import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import HorizontalLine from "../Shared/HorizontalLine";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

export default function AppointmentCardItem({ appointment }) {
  return (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.headings,
        borderRadius: 10,
        backgroundColor: Colors.fadedWhite,
        marginTop: 15,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          marginTop: 10,
          fontFamily: "appfont-semi",
        }}
      >
        {moment(appointment.attributes.Date).format("MMM Do,  YYYY")} -{" "}
        {appointment.attributes.Time}
      </Text>
      <HorizontalLine />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://res.cloudinary.com/dm5ey9xov/image/upload/v1702392604/lx8mn8edf6wzq4sxxyty.png",
          }}
          style={{height: 80, 
                  marginRight: 10, 
                  borderRadius: 10, 
                  width: 80 }}
          />
        <View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "appfont-semi",
            }}
          >
            {appointment.attributes.hospitals.data[0].attributes.Name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Ionicons name="location" size={20} color={Colors.headings} />
            <Text style={{ fontFamily: "appfont", color: Colors.GRAY }}>
              {appointment.attributes.hospitals.data[0].attributes.Address}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Ionicons name="document-text" size={20} color={Colors.headings} />
            <Text style={{ fontFamily: "appfont", color: Colors.GRAY }}>
              Booking Id: #{appointment.id}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
