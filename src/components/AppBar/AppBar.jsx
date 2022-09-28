import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigator/Navigator';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import { Suspense } from 'react';
import { Container } from '../Container/Container';
import { Header } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
