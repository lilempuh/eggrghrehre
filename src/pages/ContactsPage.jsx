import Filter from '../components/ContactList/ContactList';
import ContactsList from '../components/ContactList/ContactList';
import Form from '../components/Form/Form';

export default function ContactsPage() {
  return (
    <div>
      Phonebook
      <Form />
      <Filter />
      <ContactsList />
    </div>
  );
}
