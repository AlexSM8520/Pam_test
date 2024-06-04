import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ItemsState {
  items: string[];
}

const initialState: ItemsState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
  },
});

export const {addItem} = itemsSlice.actions;

export default itemsSlice.reducer;
