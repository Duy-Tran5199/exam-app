import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { useSelector } from "react-redux";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Icon } from "../components/home/BottomTabs";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";

export default function Account() {
    return (
        <View style={{ backgroundColor : "white" }}>

      <View style={{ height: "100%" }}>
        <ScrollView>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginVertical: 30,
            }}
          >
            <Icon icon="bell" color="green" />
            <Text
              style={{
                color: "black",
                fontSize: 20,
                marginLeft: 10,
              }}
            >
              CÀI ĐẶT THÔNG BÁO
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginVertical: 30,
            }}
          >
            <Icon icon="user-cog" color="green" />
            <Text
              style={{
                color : "black",
                fontSize: 20,
                marginLeft: 10,
              }}
            >
              THIẾT LẬP TÀI KHOẢN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginVertical: 30,
            }}
          >
            <Icon icon="list-alt" color="green" />
            <Text
              style={{
                color : "black",
                fontSize: 20,
                marginLeft: 10,
              }}
            >
              ĐƠN HÀNG CỦA TÔI
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginVertical: 30,
            }}
          >
            <Icon icon="heart" color="green" />
            <Text
              style={{
                color: "black",
                fontSize: 20,
                marginLeft: 10,
              }}
            >
              DANH SÁCH ƯA THÍCH
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
        
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginVertical: 30,
            }}
          >
            <Icon icon="sign-out-alt" color="green" />
            <Text
              style={{
                color : "black",
                fontSize: 22,
                marginLeft: 10,
              }}
            >
             ĐĂNG XUẤT
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
    
}
