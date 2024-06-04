import React from 'react';
import {View, ActivityIndicator, Text, Dimensions} from 'react-native';

interface propLoadings {
  id: string;
}

const Loading = ({id}: propLoadings) => {
  return (
    <View
      testID={id}
      style={{
        flex: 1,
        backgroundColor: '#fff',
        height: Dimensions.get('window').height,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size={'large'} color={'green'} />
      <Text
        style={{
          color: 'green',
          fontWeight: '300',
          fontSize: 25,
          marginTop: 10,
          fontFamily: 'robotomedium',
        }}>
        Test_Pam
      </Text>
    </View>
  );
};

export default Loading;
