import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeView from '../src/Home/View/HomeView.tsx';

describe('HomeView', () => {
  const navigation = {navigate: jest.fn()};

  it('renders fine', () => {
    const {getByText} = render(<HomeView navigation={navigation} />);

    expect(getByText('Prueba Tecnica')).toBeTruthy();
    expect(getByText('"Task"')).toBeTruthy();
    expect(getByText('"Listados"')).toBeTruthy();
  });

  it('navigates to Task ', () => {
    const {getByTestId} = render(<HomeView navigation={navigation} />);

    fireEvent.press(getByTestId('btnTask'));
    expect(navigation.navigate).toHaveBeenCalledWith('Task');
  });

  it('navigates to List ', () => {
    const {getByTestId} = render(<HomeView navigation={navigation} />);

    fireEvent.press(getByTestId('btnList'));
    expect(navigation.navigate).toHaveBeenCalledWith('List');
  });
});
