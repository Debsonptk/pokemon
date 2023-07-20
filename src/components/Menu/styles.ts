import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BorderShadow = styled.div`
  border-bottom: 2px solid #ccc;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
`

export const SizeImage = styled.img`
  width: 150px;
  height: auto;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  font-size: 25px;

  &:hover {
    border-bottom: 2px solid #000; /* Você pode ajustar a espessura e a cor da borda aqui */
  }
`
