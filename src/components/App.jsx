import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AppBar from './AppBar/AppBar';
import { Container } from './Container/Container';

import authOperations from '../redux/auth/auth-operations';
import PublicRoute from './PublicRoute/PablicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import authSelectors from '../redux/auth/auth-selectors';

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const RegistrPage = lazy(() => import('../pages/RegistrPage/RegistrPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {!isFetchingCurrentUser && (
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />

            <Route path="/register" restricted element={<PublicRoute />}>
              <Route path="/register" element={<RegistrPage />} />
            </Route>

            <Route path="/login" restricted element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route path="/contacts" element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Container>
  );
}
