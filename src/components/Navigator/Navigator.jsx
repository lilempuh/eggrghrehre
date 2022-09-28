import { NavigLink } from './Navigator.styled';

export default function Navigator() {
  return (
    <nav>
      <NavigLink end to="/">
        Home
      </NavigLink>
      <NavigLink to="/register">Register</NavigLink>
      <NavigLink to="/login">Login</NavigLink>
    </nav>
  );
}
