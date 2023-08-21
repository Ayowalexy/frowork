import React from "react";
import { SafeAreaView, Image, View, StyleSheet, Dimensions } from "react-native";
import { AppLogo } from "../../utils/images";
import { IText } from "../../components/Customs/Text";
import { colors } from "../../utils/colors";

export const ChoosePurpose = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={AppLogo} style={styles.logo} />
        <IText type='lg' extrasStyles={styles.header_text}>
            Choose your path
        </IText>

      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: Dimensions.get('window').height,
        backgroundColor: colors.white
    }, logo: {
        width: 113,
        height: 33
    }, header_text: {
        fontSize: 28
    }
})