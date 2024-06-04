import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {GetLista} from '../ViewModel/ListaViewModel.ts';
import Loading from '../../components/Loading.tsx';
import AgendaListItem from '../../components/AgendaListItem.tsx';

const ListaView = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lista, setLista] = useState<object[]>([]);

  useEffect(() => {
    const GettingList = async () => {
      try {
        const response = await GetLista();
        setLista(response);
      } catch (e) {
        setLista([]);
        console.log(e);
      } finally {
        setTimeout(() => setIsLoading(true), 250);
      }
    };
    GettingList();
  }, []);

  return (
    <ScrollView>
      <View style={style.container}>
        {isLoading ? (
          lista.map((item, index) => (
            <AgendaListItem
              name={item?.name}
              date={item.createdAt}
              key={index}
            />
          ))
        ) : (
          <Loading id={"loading"} />
        )}
      </View>
    </ScrollView>
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

export default ListaView;
