import { memo, useEffect } from 'react'

import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { FaMars, FaVenus, FaWeight } from 'react-icons/fa'
import { LiaRulerVerticalSolid } from 'react-icons/lia'
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
  PokemonBgStats,
  SizeImage,
  TypesContainer,
} from './styles'

interface IStatRowProps {
  name: string
  value: number
}

const StatRow: React.FC<IStatRowProps> = ({ name, value }) => (
  <Row className="px-4 pb-2">
    <span className="col col-5 col-md-2">{unslugify(name)}</span>
    <span className="col col-1">{value}</span>
    <Col className="col-md-9">
      <ProgressBar
        className="progress-bar-striped"
        role="progressbar"
        variant={
          value >= 50
            ? 'success progress-bar-striped'
            : 'danger progress-bar-striped'
        }
        now={value}
      />
    </Col>
  </Row>
)

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
                pokemon.types.map((type) => (
                  <div>
                    <TypesContainer
                      key={type}
                      className="my-2 justify-content-center align-items-center"
                    >
                      <span className=" px-3 py-1 ">{unslugify(type)}</span>
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
              <PokemonBgStats>
                <Container>
                  <div className="px-4 pt-4">
                    <h2>Description:</h2>
                    <p>{pokemon.description}</p>
                  </div>

                  <Row className="pt-4 pb-3">
                    <Col className="text-center border-end">
                      <h5>
                        <FaWeight className="px-1" size="30px" />
                        {pokemon.weight} kg
                      </h5>
                      <p>Weight</p>
                    </Col>
                    <Col className="text-center border-end">
                      <h5>
                        <LiaRulerVerticalSolid size="25px" />
                        {pokemon.height} m
                      </h5>
                      <p>Height</p>
                    </Col>
                    <Col className="text-center">
                      <h5>{unslugify(pokemon.move)}</h5>
                      <p>Move</p>
                    </Col>
                  </Row>
                  <h2 className="px-4 pb-2">Feature:</h2>
                  <p className="px-4">
                    Gender: <FaMars color="#001969" />
                    {pokemon?.gender?.m}%
                    <FaVenus color="#f62466" />
                    {pokemon?.gender?.f}%
                  </p>
                  {pokemon.stats.map((stat) => (
                    <StatRow
                      key={stat.name}
                      name={stat.name}
                      value={stat.value}
                    />
                  ))}
                  <div className="d-flex row px-4 pb-5 pt-2">
                    <h6 className="col col-5 col-md-2">Total:</h6>
                    <span className="col col-1 px-1">
                      {calcFeaturesTotal(pokemon.stats)}
                    </span>
                    <Col className="col-md-9">
                      <ProgressBar
                        role="progressbar"
                        variant={
                          calcFeaturesTotal(pokemon.stats) >= 300
                            ? 'success progress-bar-striped'
                            : 'danger progress-bar-striped'
                        }
                        now={calcFeaturesTotal(pokemon.stats) / 6}
                      />
                    </Col>
                  </div>
                </Container>
              </PokemonBgStats>
            </Container>
          </PokemonBgColor>
        )}
    </>
  )
}

export default memo(Pokemon)
