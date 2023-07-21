import { memo, useEffect } from 'react'

import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { FaMars, FaVenus } from 'react-icons/fa'
import { MdArrowBackIosNew } from 'react-icons/md'
import Lottie from 'react-lottie'
import { Link, useParams } from 'react-router-dom'

import animationData from 'assets/animation/animation_pokemon.json'

import { calcFeaturesTotal } from 'context/helpers'
import { usePokemon } from 'context/PokemonContext'

import Menu from 'components/Menu/Menu'

import { unslugify } from 'helpers'

import useTitle from 'hooks/useTitle'

import {
  PokemonBgColor,
  PokemonBgWhite,
  SizeImage,
  TypesContainer,
} from './styles'

const Pokemon: React.FC = () => {
  const { name } = useParams()
  const setTitle = useTitle()
  const { pokemon, pokemonLoading, fetchPokemon } = usePokemon()

  const pokedexIndex = (id: number): string => `#${String(id).padStart(3, '0')}`

  useEffect(() => {
    if (pokemon) {
      setTitle(unslugify(pokemon.name))
    }
  }, [pokemon, setTitle])

  useEffect(() => {
    fetchPokemon({ variables: { name } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon])

  return (
    <>
      <Menu />
      {pokemonLoading && (
        <Lottie
          options={{
            animationData,
            autoplay: true,
            loop: true,
          }}
          height={250}
          width={250}
        />
      )}
      {!pokemonLoading &&
        pokemon &&
        pokemon.stats !== undefined &&
        pokemon.move !== undefined && (
          <PokemonBgColor $bgColor={pokemon.color}>
            <Container>
              <div className="pt-3 pb-3">
                <Link to="/pokemons">
                  <MdArrowBackIosNew size="35px" color="white" />
                </Link>
              </div>
              <div className="d-flex justify-content-between">
                <h1>{unslugify(String(name))}</h1>
                <h2>{pokedexIndex(pokemon.id)}</h2>
              </div>
              {Array.isArray(pokemon.types) &&
                pokemon.types.length > 0 &&
                pokemon.types.map((_t) => (
                  <div>
                    <TypesContainer
                      key={_t}
                      className="my-2 justify-content-center align-items-center"
                    >
                      <span
                        className=" px-3 py-1 "
                        style={{ verticalAlign: 'midle' }}
                      >
                        {unslugify(_t)}
                      </span>
                    </TypesContainer>
                  </div>
                ))}
              <div className="d-flex justify-content-center">
                <SizeImage
                  src={pokemon.image ? pokemon.image : ''}
                  alt={pokemon.name}
                  className="img-fluid"
                />
              </div>
              <PokemonBgWhite>
                <Container>
                  <div className="px-4 pt-4">
                    <h2>Description:</h2>
                    <p>{pokemon.description}</p>
                  </div>
                  <p className="px-4">
                    Gender: <FaMars style={{ color: '#6C79DB' }} />{' '}
                    {pokemon?.gender?.m}%{' '}
                    <FaVenus style={{ color: '#F0729F' }} />
                    {pokemon?.gender?.f}%
                  </p>
                  <Row className="pt-4 pb-3">
                    <Col className="text-center border-end">
                      <h6>Weight:</h6>
                      <p>{pokemon.weight} Kg</p>
                    </Col>
                    <Col className="text-center border-end">
                      <h6>Height:</h6>
                      <p>{pokemon.height} m</p>
                    </Col>
                    <Col className="text-center">
                      <h6>Move:</h6>
                      <p>{unslugify(pokemon.move)}</p>
                    </Col>
                  </Row>
                  <h2 className="px-4">Feature:</h2>
                  <Row className="px-4 pb-2">
                    <span className="col col-5 col-md-2">
                      {unslugify(pokemon.stats[0].name)}
                    </span>
                    <span className="col col-1">{pokemon?.stats[0].value}</span>
                    <div>
                      <ProgressBar
                        className="progress-bar-striped"
                        role="progressbar"
                        variant={
                          pokemon.stats[0].value >= 50
                            ? 'success progress-bar-striped'
                            : 'danger progress-bar-striped'
                        }
                        now={pokemon.stats[0].value}
                      />
                    </div>
                  </Row>
                  <Row className="px-4 pb-2">
                    <span className="col col-5 col-md-2">
                      {unslugify(pokemon.stats[1].name)}
                    </span>
                    <span className="col col-1">{pokemon?.stats[1].value}</span>
                    <div>
                      <ProgressBar
                        className="progress-bar-striped"
                        role="progressbar"
                        variant={
                          pokemon.stats[1].value >= 50
                            ? 'success progress-bar-striped'
                            : 'danger progress-bar-striped'
                        }
                        now={pokemon.stats[1].value}
                      />
                    </div>
                  </Row>
                  <Row className="px-4 pb-2">
                    <span className="col col-5 col-md-2">
                      {unslugify(pokemon.stats[2].name)}
                    </span>
                    <span className="col col-1">{pokemon?.stats[2].value}</span>
                    <div>
                      <ProgressBar
                        className="progress-bar-striped"
                        role="progressbar"
                        variant={
                          pokemon.stats[2].value >= 50
                            ? 'success progress-bar-striped'
                            : 'danger progress-bar-striped'
                        }
                        now={pokemon.stats[2].value}
                      />
                    </div>
                  </Row>
                  <Row className="px-4 pb-2">
                    <span className="col col-5 col-md-2">
                      {unslugify(pokemon.stats[3].name)}
                    </span>
                    <span className="col col-1">{pokemon?.stats[3].value}</span>
                    <div>
                      <ProgressBar
                        className="progress-bar-striped"
                        role="progressbar"
                        variant={
                          pokemon.stats[3].value >= 50
                            ? 'success progress-bar-striped'
                            : 'danger progress-bar-striped'
                        }
                        now={pokemon.stats[3].value}
                      />
                    </div>
                  </Row>
                  <Row className="px-4 pb-2">
                    <span className="col col-5 col-md-2">
                      {unslugify(pokemon.stats[4].name)}
                    </span>
                    <span className="col col-1">{pokemon?.stats[4].value}</span>
                    <div>
                      <ProgressBar
                        className="progress-bar-striped"
                        role="progressbar"
                        variant={
                          pokemon.stats[4].value >= 50
                            ? 'success progress-bar-striped'
                            : 'danger progress-bar-striped'
                        }
                        now={pokemon.stats[4].value}
                      />
                    </div>
                  </Row>
                  <Row className="px-4 pb-4">
                    <span className="col col-5 col-md-2">
                      {unslugify(pokemon.stats[5].name)}
                    </span>
                    <span className="col col-1">{pokemon?.stats[5].value}</span>
                    <div>
                      <ProgressBar
                        className="progress-bar-striped"
                        role="progressbar"
                        variant={
                          pokemon.stats[5].value >= 50
                            ? 'success progress-bar-striped'
                            : 'danger progress-bar-striped'
                        }
                        now={pokemon.stats[5].value}
                      />
                    </div>
                  </Row>
                  <div className="d-flex row px-4 pb-5">
                    <h6 className="col col-5 col-md-2">Total:</h6>
                    <span className="col col-1">
                      {calcFeaturesTotal(pokemon.stats)}
                    </span>
                    <div>
                      <ProgressBar
                        role="progressbar"
                        variant={
                          calcFeaturesTotal(pokemon.stats) >= 300
                            ? 'success progress-bar-striped'
                            : 'danger progress-bar-striped'
                        }
                        now={calcFeaturesTotal(pokemon.stats) / 6}
                      />
                    </div>
                  </div>
                </Container>
              </PokemonBgWhite>
            </Container>
          </PokemonBgColor>
        )}
    </>
  )
}

export default memo(Pokemon)
