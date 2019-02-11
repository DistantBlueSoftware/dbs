import styled from 'styled-components'

export const FormInput = styled.input`
  border: 2px solid white;
  caret-color: white;
  padding: 5px;
  background: rgba(255,255,255,0.05);
  color: white;
  transition: background 0.3s;
  &:active, :focus {
    background: rgba(255,255,255,0.25);
  }
`