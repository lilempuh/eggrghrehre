import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Title, Form, Input, Button } from './RegistrPage.styled';

export default function RegistrPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  return (
    <div>
      <Title>Страница регистрации</Title>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Имя
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

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

        <Button type="submit">Зарегистрироваться</Button>
      </Form>
    </div>
  );
}
