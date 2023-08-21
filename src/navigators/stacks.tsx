import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

//screens
import { ChoosePurpose } from "../screens/onboading/choose-purpose";

const Stacks = createStackNavigator();

export const AppStacks = () => (
    <Stacks.Navigator screenOptions={{headerShown: false}}>
        <Stacks.Screen name='Choose Purpose' component={ChoosePurpose} />
    </Stacks.Navigator>
)