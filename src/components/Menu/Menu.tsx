import { memo } from 'react'

import { Container } from 'react-bootstrap'

import logo from 'assets/pokemon_logo.jpeg'

import { BorderShadow, SizeImage, StyledLink } from './styles'

const Menu: React.FC = () => (
  <BorderShadow>
    <Container className="d-flex justify-content-between align-items-center pt-4 pb-4">
      <div>
        <SizeImage src={logo} alt="perfil" className="img-fluid" />
      </div>
      <div>
        <StyledLink to="/" className="text-black text-decoration-none">
          Home
        </StyledLink>
      </div>
      <StyledLink to="/pokemons" className="text-black text-decoration-none">
        Pokemons
      </StyledLink>
      <StyledLink to="/" className="text-black text-decoration-none">
        Contact
      </StyledLink>
      <div />
    </Container>
  </BorderShadow>
)

export default memo(Menu)
