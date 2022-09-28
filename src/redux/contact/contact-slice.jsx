import { createSlice } from '@reduxjs/toolkit';

import contactsOperations from './contacts-operations';

const initialState = {
  contacts: [],
  filter: '',
};
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
    [contactsOperations.filter]: (state, action) => {
      state.filter = action.payload;
    },
  },
  reducers: {
    changeFilter(state, action) {
      state = action.payload;
    },
  },
});
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const presistContactsReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );

export const { changeFilter } = contactSlice.actions;

export default contactSlice.reducer;
