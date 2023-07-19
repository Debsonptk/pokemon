import styled from 'styled-components'

type colorsType = {
  [index: string]: string
}

interface ICardContainerProps {
  bgColor: string
}

const colors: colorsType = {
  blue: '#5ed5eb',
  red: '#fa847f',
  green: '#6dd2af',
  white: '#d7d7d7',
  yellow: '#e7e25a',
  purple: '#cd84f1',
  brown: '#a08679',
  pink: '#f5aee1',
  gray: '#787a7a',
  black: '#2e3333',
}

const fontColors: colorsType = {
  white: 'black',
  yellow: 'black',
  default: 'white',
}

export const CardBg = styled.div<ICardContainerProps>`
  background-color: ${({ bgColor }) => colors[bgColor]};
  border-radius: 10px;
  float: left;
  transition: box-shadow 0.3s;

  h2 {
    font-size: 1.8rem;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 11px black;
  }
  color: ${({ bgColor }) =>
    fontColors[bgColor] ? fontColors[bgColor] : fontColors.default};

  @media (min-width: 992px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`

export const TypesBg = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  display: flex;
`

export const IdBg = styled.div<ICardContainerProps>`
  color: rgba(0, 0, 0, 0.2);
`
