import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {}
});

const addContact = createAsyncThunk('contacts/addContact', async newContact => {
  try {
    const { data } = await axios.post('/contacts', newContact);

    return data;
  } catch (error) {}
});

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);

      return contactId;
    } catch (error) {}
  }
);

export const filter = createAction('contacts/filter');

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  filter,
};

export default contactsOperations;
