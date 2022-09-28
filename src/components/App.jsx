import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useSelector } from 'react';
import AppBar from './AppBar';
// import TodosView from './views/TodosView';
import { Container } from './App.styled';
import authOperations from '../redux/auth/auth-operations';
import PublicRoute from './PublicRoute/PablicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ContactsPage from '../pages/ContactsPage';
import { Home } from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegistrPage from '../pages/RegistrPage';
import authSelectors from '../redux/auth/auth-selectors';
import Form from './Form/Form';

// const Home = lazy(() => import('../pages/Home'));
// const RegistrPage = lazy(() => import('../pages/RegistrPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));

export default function App() {
  const dispatch = useDispatch();

  // const isFetchingCurrentUser = useSelector(
  //   authSelectors.getIsFetchingCurrentUser
  // );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {/* {!isFetchingCurrentUser && ( */}
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
            <Route path="/contacts" element={<Form />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* )} */}
    </Container>
  );
}
