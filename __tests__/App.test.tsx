import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TaskView from '../src/Task/View/TaskView.tsx';

describe('TaskView component', () => {
  test('render TaskView', () => {
    const { getByText, getByPlaceholderText } = render(<TaskView />);

    const addButton = getByText('Add new Task');
    expect(addButton).toBeTruthy();

    const inputField = getByPlaceholderText('Add new item');
    expect(inputField).toBeTruthy();
  });

  test('add New Task', () => {
    const { getByPlaceholderText, getByText } = render(<TaskView />);


    const inputField = getByPlaceholderText('Add new item');
    fireEvent.changeText(inputField, 'New Task');

    const addButton = getByText('Add');
    fireEvent.press(addButton);

    const newTask = getByText('New Task');
    expect(newTask).toBeTruthy();
  });
});
