import React from "react";
import {View, Text, Image, ScrollView} from "react-native";

const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Mua sắm",
    },
    {
        image: require("../../assets/images/soft-drink.png"),
        text: "Đồ uống",
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bánh ngọt",
    },
    {
        image: require("../../assets/images/fast-food.png"),
        text: "Đồ ăn nhanh",
    },
    {
        image: require("../../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../../assets/images/coffee.png"),
        text: "Coffee",
    },
    {
        image: require("../../assets/images/desserts.png"),
        text: "Tráng miệng",
    },
]
export default function Categories() {
    return (
        <View style={{
            marginTop: 10,
            backgroundColor:"#fff",
            paddingVertical: 10,
            paddingLeft: 20,
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item,index) => (
                    <View key={index} style= {{alignItems: "center", marginRight: 30}}>
                        <Image source={item.image} style={{
                            width:50,
                            height:40,
                            resizeMode: 'contain'
                        }} />
                        <View style={{paddingLeft:15, width:70}}>
                             <Text style ={{fontSize:13, fontWeight: "bold" }}>{item.text}</Text>
                        </View>
                       
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}