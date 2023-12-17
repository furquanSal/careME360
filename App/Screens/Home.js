import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import Header from "../Components/Home/Header";
import SearchBar from "../Components/Home/SearchBar";
import Slider from "../Components/Home/Slider";
import Categories from "../Components/Home/Categories";
import Colors from "../../assets/Shared/Colors";
import PremiumHospitals from "../Components/Home/PremiumHospitals";

export default function Home() {
  return (
    <ScrollView style={{ padding: 20, backgroundColor: Colors.bgColor, flex: 1 }}>
      <Header />

      <SearchBar setSearchText={(value) => console.log(value)} />

      <Slider />

      <Categories />

      <PremiumHospitals />

      {/* <PremiumHospitals /> */}

      {/* <PremiumHospitals/> */}
    </ScrollView>
  );
}
