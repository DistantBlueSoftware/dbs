import styled from 'styled-components'

export const Hexagon = styled.div`
  position: relative;
  width: 100px; 
  height: 57.74px;
  background-color: #08cc3b;
  margin: 50px 10px 30px 10px;
  border-left: solid 5px #ffffff;
  border-right: solid 5px #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:48px;
  animation: floating ${props =>  props.time || 1}s infinite;
  :before,
  :after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 70.71px;
    height: 70.71px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 9.6447px;
  }

  :before {
    top: -35.3553px;
    border-top: solid 7.0711px #ffffff;
    border-right: solid 7.0711px #ffffff;
  }

  :after {
    bottom: -35.3553px;
    border-bottom: solid 7.0711px #ffffff;
    border-left: solid 7.0711px #ffffff;
  }
  `