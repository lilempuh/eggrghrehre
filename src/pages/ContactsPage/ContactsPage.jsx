import Filter from '../../components/Filter/Filter';
import ContactsList from '../../components/ContactList/ContactList';
import Form from '../../components/Form/Form';
import { Container } from 'components/Container/Container';
import { Title } from './ContactsPage.styled';
import { Section } from 'components/Section/Section.styled';

export default function ContactsPage() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Section>
        <Form />
        <Filter />
        <ContactsList />
      </Section>
    </Container>
  );
}
