import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Lottie from 'react-lottie'

import animationData from 'assets/animation/loading.json'
import pikachu from 'assets/BannerComplete.png'

import { usePokemon } from 'context/PokemonContext'

import Menu from 'components/Menu/Menu'

import useTitle from 'hooks/useTitle'

import { SizeText, StyleButton } from './styles'

const Home: React.FC = () => {
  const setTitle = useTitle()
  const { loading } = usePokemon()

  useEffect(() => {
    setTitle('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <Container>
        {loading && (
          <Lottie
            options={{
              animationData,
              autoplay: true,
              loop: true,
            }}
            height={400}
            width={400}
          />
        )}
        {!loading && (
          <Row>
            <Col>
              <SizeText className="pt-5 pb-3">
                Which Pokémon would you choose?
              </SizeText>
              <p className="pb-3">
                You can know the type of Pokémon, their strengths, weaknesses
                and abilities.
              </p>
              <StyleButton type="button" className="btn text-white btn-lg">
                See the Pokémon
              </StyleButton>
            </Col>
            <Col>
              <img
                src={pikachu}
                alt="Pikachu"
                className="img-fluid d-flex flex-grow-1 p-5"
              />
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}

export default memo(Home)
