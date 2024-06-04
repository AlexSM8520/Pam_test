import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface AgendaProps {
  name: string;
  date: string;
}

const AgendaListItem = ({name, date}: AgendaProps) => {
  function formatDate(dateStr) {
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${day}/${month}/${year}`;
  }
  return (
    <View style={style.container_List}>
      <View style={style.pictureContainer}>
        {/*<Image source={{uri: item.avatar}} style={style.pictureStyle} />*/}
        {/*aparentemente las imagenes ya no estan es las direcciones que el endpoint provee,*/}
        <Image
          testID={"profile-image"}
          source={{
            uri: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
          }}
          style={style.pictureStyle}
        />
      </View>
      <View>
        <Text style={style.textStyle}>{name}</Text>
        <Text style={style.textStyle}>{formatDate(date)}</Text>
      </View>
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
  container_List: {
    flexDirection: 'row',
    height: 80,
    width: '90%',
    marginHorizontal: '5%',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#bababa',
    elevation: 5,
  },
  pictureContainer: {
    height: '90%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureStyle: {
    height: 48,
    width: 48,
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

export default AgendaListItem;
