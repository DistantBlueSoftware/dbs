import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  transition: color 0.3s;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #08cc3b;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
  }
  &:hover:before, &:active:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`