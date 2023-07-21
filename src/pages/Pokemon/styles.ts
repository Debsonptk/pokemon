import styled from 'styled-components'

export const BgContainer = styled.div`
  color: white;
`

type colorsType = {
  [index: string]: string
}

interface ICardContainerProps {
  $bgColor: string
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

export const PokemonBgColor = styled.div<ICardContainerProps>`
  background-color: ${({ $bgColor }) => colors[$bgColor]};
  color: ${({ $bgColor }) =>
    fontColors[$bgColor] ? fontColors[$bgColor] : fontColors.default};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const PokemonBgWhite = styled.div`
  border-radius: 20px;
  background-color: white;
  color: black;
  font-size: 0.8rem;
`

export const TypesContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  display: inline-block;
  padding: 8px 8px;
`

export const IdContainer = styled.div<ICardContainerProps>`
  color: rgba(0, 0, 0, 0.3);
`

export const Description = styled.h2<ICardContainerProps>`
  color: ${({ $bgColor }) => colors[$bgColor]};
`
export const SizeImage = styled.img`
  max-width: 240px;
`
