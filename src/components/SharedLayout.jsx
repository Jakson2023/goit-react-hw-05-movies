import { NavLink, Outlet } from 'react-router-dom';
import { WrapNavLink, WrapperContainer } from 'pages/pages.styled';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
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
      <Outlet />
    </WrapperContainer>
  );
}
