import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 20px 30px;
  margin: 10px 20px;
  position: relative;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: ${props => props.bgColor};
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 999;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    box-sizing: border-box;
  }
  &:before {
    bottom: 0;
    left: 0;
    border-left: 1px solid ${props => props.color};
    border-top: 1px solid white;
    transition: 0s ease opacity 0.8s, 0.2s ease width 0.4s,
      0.2s ease height 0.6s;
  }
  &:after {
    top: 0;
    right: 0;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    transition: 0s ease opacity 0.4s, 0.2s ease width, 0.2s ease height 0.2s;
  }
  &:hover:before,
  &:hover:after {
    height: 100%;
    width: 100%;
    opacity: 1;
  }
  &:hover:before {
    transition: 0s ease opacity 0s, 0.2s ease height, 0.2s ease width 0.2s;
  }
  &:hover:after {
    transition: 0s ease opacity 0.4s, 0.2s ease height 0.4s,
      0.2s ease width 0.6s;
  }
  &:hover {
    background: ${props => props.bgColor};
  }

  &:focus {
    outline: none;
  }
`;
