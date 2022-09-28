const getContacts = state => state.contacts.contacts;
const getFilter = state => state.contacts.filter;

const contactsSelectors = {
  getContacts,
  getFilter,
};

export default contactsSelectors;
