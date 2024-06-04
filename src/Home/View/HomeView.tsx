import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HomeView = ({navigation: navigation}) => {
  return (
    <View style={style.container}>
      <Text style={style.text_header}>Prueba Tecnica</Text>
      <TouchableOpacity
        style={style.buttonStyle}
        onPress={() => navigation.navigate('Task')}>
        <Text style={style.textStyle}>"Task"</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.buttonStyle}
        onPress={() => navigation.navigate('List')}>
        <Text style={style.textStyle}>"Listados"</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonStyle: {
    marginTop: 4,
    height: 40,
    width: '80%',
    backgroundColor: '#004558',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'semibold',
  },
  text_header: {
    fontSize: 24,
    color: '#004558',
    fontWeight: 'semibold',
    marginBottom: 24,
  },
});

export default HomeView;
