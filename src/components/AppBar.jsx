import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navigation from '././Navigator/Navigator';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import authSelectors from '../redux/auth/auth-selectors';
import { Suspense } from 'react';
import { Container } from './Container/Container';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <Container>
        <div>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
}
