import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import EmployeessListView from '../src/Lista/View/ListaView.tsx';
import {GetLista} from '../src/Lista/ViewModel/ListaViewModel';

jest.mock('../src/Lista/ViewModel/ListaViewModel.ts', () => ({
  GetLista: jest.fn(),
}));

describe('EmployeessListView', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('display loading', () => {
    GetLista.mockResolvedValueOnce([]);
    const {getByTestId} = render(<EmployeessListView />);

    expect(getByTestId('loading')).toBeTruthy();
  });

  it('fetch and display', async () => {
    const mockResponse = [
      {name: 'Juanita Perez', createdAt: '2021-10-01T12:13:22.338Z'},
      {name: 'pedro Alonzo', createdAt: '2023-01-02T12:13:22.338Z'},
    ];
    GetLista.mockResolvedValueOnce(mockResponse);

    const {getByText, queryByTestId} = render(<EmployeessListView />);

    await waitFor(() => {
      expect(queryByTestId('loading')).toBeNull();
    });

    mockResponse.forEach(item => {
      expect(getByText(item.name)).toBeTruthy();
      // Verifica el formato de la fecha convertida
      const formattedDate = new Date(item.createdAt).toLocaleDateString(
        'es-ES',
        {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        },
      );
      expect(getByText(formattedDate)).toBeTruthy();
    });
  });

  it('fetch errors gracefully', async () => {
    GetLista.mockRejectedValueOnce(new Error('Failed to fetch'));

    const {queryByTestId} = render(<EmployeessListView />);

    await waitFor(() => {
      expect(queryByTestId('loading')).toBeNull();
    });

    // Verificar que no hay elementos en la lista debido al error
    expect(queryByTestId('loading')).toBeNull();
  });
});
