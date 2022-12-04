import React, { useState } from "react";
import {View, Text, TouchableOpacity} from "react-native"

export default function HeaderTabs(props) {
    return (
        <View style ={{flexDirection: "row", alignSelf: 'center'}}>
            <HeaderButton 
                text="DELIVERY" 
                btnColor="black"
                textColor="white" 
                activeTab={props.activeTab} 
                setActiveTab={props.setActiveTab}
                
                
            />
            <HeaderButton 
                text="PICKUP"
                btnColor="white" 
                textColor="black"
                activeTab={props.activeTab} 
                setActiveTab={props.setActiveTab}
            />
        </View>
    );
}

const HeaderButton = (props) => ( 
     <TouchableOpacity style = {{
         width: 110,
         alignSelf:"center",
         backgroundColor: props.activeTab === props.text ? "black" : "white",
         paddingVertical: 6,
         paddingHorizontal: 16,
         borderRadius: 30
     }}
     onPress={() => props.setActiveTab(props.text)}
     >
     <Text style = {{paddingLeft:5,color: props.activeTab === props.text ? "white" : "black", fontSize: 15, fontWeight: "bold" }}>{props.text}</Text>
     </TouchableOpacity>
);