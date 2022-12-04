import React, { useEffect, useState } from "react";
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, { localRestaurants } from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import GlobalStyles from "../styles/GlobalStyles";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY = "OEQliltTLb-ghVeecLmFB6BMdn0StoRqn4FuPS3_LAnATGO9JmKxPvYFzte36FJKW__uRrk7vlO9nyUtqU9B0nTNrQINV5KEEASP4yQknUCCnWfODBjCK4qk-YdJYXYx";

export default function Home({navigation}) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        if(YELP_API_KEY === 'GO_FIND_SOME') {
            return;
        }
        // console.log(YELP_API_KEY+"ba cam nu bagam");
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,   
            }
        }

        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json()
        .then((json) => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())))));

    };

    useEffect(() => {
        getRestaurantsFromYelp();
      }, [city, activeTab]);

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style = {{backgroundColor:"white", padding:15}}>
             <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}  />
             <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView vertical showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1}/>
          
        </SafeAreaView>
    );
}