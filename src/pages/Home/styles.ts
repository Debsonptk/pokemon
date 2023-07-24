import styled from 'styled-components'

export const StyleButton = styled.button`
  border-radius: 8px;
  background: #48d0b0;
`

export const SizeText = styled.h1`
  font-family: Inter, sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  color: rgb(40, 40, 40);
`
export const AfterText = styled.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: #f4d338;
    z-index: -1;
  }
`
