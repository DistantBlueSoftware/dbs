import styled from 'styled-components'

export const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  color: white;
  text-decoration: none;
  margin: 10px;
  display:inline-block;
  transition: all 0.1s;
  background: transparent;
  &:hover {
    cursor: pointer;
    color: #144794;
    background: white;
  }
`