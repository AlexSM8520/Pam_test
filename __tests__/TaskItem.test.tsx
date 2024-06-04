import React from 'react';
import {render} from '@testing-library/react-native';
import TaskItem from '../src/components/TaskItem';

describe('TaskItem', () => {
  it('renders with given text and key', () => {
    const {getByText} = render(<TaskItem text="test Task" key={1} />);

    expect(getByText('Sample Task')).toBeTruthy();
  });

  it('correct styles', () => {
    const {getByText} = render(<TaskItem text="Styled Task" key={2} />);

    const textElement = getByText('Styled Task');
    expect(textElement.props.style).toMatchObject({
      fontSize: 18,
      color: '#000',
      fontWeight: 'semibold',
    });
  });
});
