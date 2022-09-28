import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Span, Button } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <Span>Добро пожаловать, {name}</Span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </Button>
    </div>
  );
}
