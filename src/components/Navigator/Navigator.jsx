import { NavigLink } from './Navigator.styled';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export default function Navigator() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <nav>
        <NavigLink end to="/">
          Home
        </NavigLink>
        {isLoggedIn && <NavigLink to="/contacts">Contacts</NavigLink>}
      </nav>
    </div>
  );
}
