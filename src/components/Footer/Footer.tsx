import { memo } from 'react'

import { Container } from 'react-bootstrap'

import logo from '../../assets/pokemon_logo.jpeg'
import { SizeImage } from './styles'

const Footer: React.FC = () => (
  <div>
    <Container className="d-flex justify-content-center align-items-center">
      <div>
        <SizeImage src={logo} alt="logo" className="img-fluid" />
      </div>
    </Container>
  </div>
)

export default memo(Footer)
