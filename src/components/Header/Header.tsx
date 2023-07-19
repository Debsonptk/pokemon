import { memo } from 'react'

import { Container } from 'react-bootstrap'

import perfil from '../../assets/perfil.png'
import { BgColor, SizeImage } from './styles'

const Header: React.FC = () => (
  <BgColor>
    <Container className="d-flex justify-content-between align-items-center">
      <div>
        <h1 className="text-white">Hello, Ash Katchum</h1>
        <p className="text-white">Welcome!</p>
      </div>
      <div>
        <SizeImage src={perfil} alt="perfil" className="img-fluid" />
      </div>
    </Container>
  </BgColor>
)

export default memo(Header)
