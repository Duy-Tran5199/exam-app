import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import {Provider as ReduxProvider} from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "./screens/Account";
import Orderscreen from "./screens/Orderscreen";
import { Icon } from "./components/home/BottomTabs";
import shoppingbag from "./screens/shoppingbag";
import Browse from "./screens/Browse";

const storeConf = configureStore();
const Tab = createBottomTabNavigator();

export default function RootNavigation() {
 
  const Stack = createStackNavigator();

  const screenStackOptions = {
    headerShown: false,
    tabBarVisible: false,
  }; 
  function HomeStackScreen() {
    return (
        <ReduxProvider store={storeConf}>
           
                <Stack.Navigator initialRouteName='Home' screenOptions={screenStackOptions} >
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
                    <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
                </Stack.Navigator>
            
        </ReduxProvider>

    );
  }
   return(
    <NavigationContainer>
        <Tab.Navigator   screenOptions={({ route }) => ({
          tabBarStyle: {
            flexDirection: "row",
            height: 90,
            justifyContent: "space-between",
            backgroundColor: "#eee",
          },
          tabBarShowLabel: false,
        })}
        initialRouteName="home" >
         <Tab.Screen
            options={{
              headerStyle: {
                backgroundColor:"white",
              },
              headerShown: false,
         
             
              tabBarIcon: (tabInfo) => {
                return (
                  <Icon
                    icon="home"
                    text="Trang Ch???"
                    color={
                      tabInfo.focused ? "green" :  "black" 
                    }
                  />
                );
              },
            }}
            name="Home"
            component={HomeStackScreen}
          />
           <Tab.Screen
              options={{
                headerShown: false,
                tabBarIcon: (tabInfo) => {
                  return (
                    <Icon
                      icon="search"
                      text="T??m Ki???m"
                      color={
                        tabInfo.focused
                          ? "green"
                          : "black"
                      }
                    />
                  );
                },
              }}
              name="Browse"
              component={Browse}
            />
            <Tab.Screen
              options={{
                headerShown: false,
                tabBarIcon: (tabInfo) => {
                  return (
                    <Icon
                      icon="shopping-bag"
                      text="Gi??? H??ng"
                      color={
                        tabInfo.focused
                          ? "green" 
                          : "black"
                      }
                    />
                  );
                },
              }}
              name="shoppingbag"
              component={shoppingbag}
            />
            <Tab.Screen
              options={{
                headerShown: false,
                tabBarIcon: (tabInfo) => {
                  return (
                    <Icon
                      icon="receipt"
                      text="????n H??ng"
                      color={
                        tabInfo.focused
                          ? "green" 
                          : "black"
                      }
                    />
                  );
                },
              }}
              name="Orderscreen"
              component={Orderscreen}
            />
            <Tab.Screen
              options={{
                headerShown: false,
                tabBarIcon: (tabInfo) => {
                  return (
                    <Icon
                      icon="user"
                      text="T??i Kho???n"
                      color={
                        tabInfo.focused
                          ? "green" 
                          : "black"
                      }
                    />
                  );
                },
              }}
              name="Account"
              component={Account}
            />
        </Tab.Navigator>
    </NavigationContainer>
   )
}