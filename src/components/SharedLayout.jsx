import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import { WrapNavLink, WrapperContainer } from 'pages/pages.styled';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #ff5500;
  }
  text-decoration: none;
  font-size: 30px;
`;
export default function SharedLayout() {
  return (
    <WrapperContainer>
      <WrapNavLink>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </WrapNavLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </WrapperContainer>
  );
}
