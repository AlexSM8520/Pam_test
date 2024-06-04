import React from 'react';
import { render } from '@testing-library/react-native';
import AgendaListItem from '../src/components/AgendaListItem';

describe('AgendaListItem Component', () => {

  it('set correct name and date', () => {
    const { getByText } = render(
      <AgendaListItem name="jhon Wick" date="2021-10-22T12:13:22.338Z" />
    );

    expect(getByText('jhon Wick')).toBeTruthy();
    expect(getByText('22/10/2021')).toBeTruthy();
  });

  it('formats date', () => {
    const { getByText } = render(
      <AgendaListItem name="terminator lopez" date="2023-12-25T12:13:22.338Z" />
    );

    expect(getByText('terminator lopez')).toBeTruthy();
    expect(getByText('25/12/2023')).toBeTruthy();
  });

  it('renders the default image correctly', () => {
    const { getByTestId } = render(
      <AgendaListItem name="Robleto Matus" date="2023-06-04" />
    );

    const image = getByTestId('profile-image');
    expect(image.props.source.uri).toBe('https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png');
  });

});
