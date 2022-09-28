import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink end to="/register">
        Регистрация
      </NavLink>
      <NavLink end to="/login">
        Логин
      </NavLink>
    </div>
  );
}
