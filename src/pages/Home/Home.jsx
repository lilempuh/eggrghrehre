import React from 'react';
import { Container } from 'components/Container/Container';
import { Welcom } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Welcom>
        Приветсвуем тебя в нашем удобном приложении, которое поможет тебе
        сохранить контакты важных людей!{' '}
      </Welcom>
    </Container>
  );
}
