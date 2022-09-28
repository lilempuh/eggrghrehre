import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Container } from 'components/Container/Container';
import { Title, Form, Input, Button } from './LoginPage.styled';

export default function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };
  return (
    <Container>
      <div>
        <Title>Страница логина</Title>

        <Form onSubmit={handleSubmit} autoComplete="off">
          <label>
            Почта
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Пароль
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </label>

          <Button type="submit">Войти</Button>
        </Form>
      </div>
    </Container>
  );
}
