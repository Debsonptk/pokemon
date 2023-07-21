import { memo } from 'react'

import { Container } from 'react-bootstrap'

import logo from 'assets/pokemon_logo.jpeg'

import MenuMobile from 'components/MenuMobile/MenuMobile'

import { BorderShadow, SizeImage, StyledLink } from './styles'

const Menu: React.FC = () => (
  <BorderShadow>
    <Container className="d-flex justify-content-between align-items-center pt-4 pb-4">
      <div>
        <SizeImage src={logo} alt="perfil" className="img-fluid" />
      </div>
      <MenuMobile />
      <div className="d-none d-lg-block">
        <StyledLink to="/" className="text-black text-decoration-none">
          Home
        </StyledLink>
      </div>
      <div className="d-none d-lg-block">
        <StyledLink to="/pokemons" className="text-black text-decoration-none">
          Pokemons
        </StyledLink>
      </div>
      <div className="d-none d-lg-block">
        <StyledLink to="/contact" className="text-black text-decoration-none">
          Contact
        </StyledLink>
      </div>
      <div className="d-none d-lg-block" />
    </Container>
  </BorderShadow>
)

export default memo(Menu)
