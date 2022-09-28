// import { useState } from 'react';
import { Forma, Input, Button } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import contactsSelectors from '../../redux/contact/contacts-selectors';
import contactsOperations from '../../redux/contact/contacts-operations';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target.elements;
    const addContacts = contacts.find(
      contact => contact.name.toLowerCase() === form.name.value.toLowerCase()
    );
    if (addContacts) {
      alert(`${form.name.value} is already in contacts`);
      return;
    }

    const newContact = {
      name: form.name.value,
      number: form.number.value,
    };

    dispatch(contactsOperations.addContact(newContact));
    form.name.value = '';
    form.number.value = '';
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <p>Name</p>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <p>Number</p>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">Add Contact</Button>
    </Forma>
  );
}
