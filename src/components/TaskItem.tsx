import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ItemProps {
  key: number;
  text: string;
}

const TaskItem = ({text}: ItemProps) => {
  return (
    <View style={style.container_List} >
      <View style={style.nameContainer}>
        <Text style={style.textStyle}>{text}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container_List: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#bababa',
    elevation: 5,
  },
  nameContainer: {
    flex: 1,
    width: '70%',
    height: '100%',
    borderWidth: 1,
    padding: 10,
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
    color: '#000',
    fontWeight: 'semibold',
  },
  text_header: {
    fontSize: 24,
    color: '#004558',
    fontWeight: 'semibold',
    marginBottom: 24,
  },
});

export default TaskItem;
