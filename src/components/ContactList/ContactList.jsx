import React from 'react';
import { Contactelement, Button } from './ContactList.styled';
import contactsSelectors from '../../redux/contact/contacts-selectors';
import contactsOperations from '../../redux/contact/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import Form from 'components/Form/Form';
// import Filter from '../Filter/Filter';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const changeFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterListContact = changeFilterContacts();

  const getDeletContact = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  console.log(filterListContact);
  return (
    <div>
      <ul>
        {filterListContact.map(contact => {
          return (
            <Contactelement key={contact.id} contact={contact}>
              {contact.name}:{contact.number}
              <Button onClick={() => getDeletContact(contact.id)}>Delet</Button>
            </Contactelement>
          );
        })}
      </ul>
    </div>
  );
}
