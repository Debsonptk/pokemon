import styled from 'styled-components'

type colorsType = {
  [index: string]: string
}

interface ICardContainerProps {
  bgcolor: string
}

const colors: colorsType = {
  blue: '#5190d6',
  red: '#fe9f52',
  green: '#6ab760 ',
  white: '#d7d7d7',
  yellow: '#f4d338',
  purple: '#b369ce ',
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
  background-color: ${({ bgcolor }) => colors[bgcolor]};
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
  color: ${({ bgcolor }) =>
    fontColors[bgcolor] ? fontColors[bgcolor] : fontColors.default};

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
  color: rgba(0, 0, 0, 0.3);
`
