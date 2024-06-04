import store from '../src/store';
import {addItem} from '../src/slice/itemSlice.ts';

describe('Verify Store', () => {
  it('intial state', () => {
    const state = store.getState();
    expect(state.items).toEqual({items: []});
  });

  it('inserItem', () => {
    store.dispatch(addItem('Test Item'));
    const state = store.getState();
    expect(state.items.items).toContain('Test Item');
  });
});
