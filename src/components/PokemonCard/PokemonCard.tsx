import { memo } from 'react'

import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PokemonType } from 'Types/PokemonType'

import { unslugify } from 'helpers'

import { CardBg, IdBgContainer, TypesBgContainer } from './styles'

interface IPokemonCardProps {
  pokemon: PokemonType
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  return (
    <CardBg
      $bgColor={pokemon.color}
      className="d-flex  flex-column position-relative px-2 py-3 w-100"
    >
      <div className="d-flex">
        <h2 className="mb-3 d-flex flex-grow-1">{unslugify(pokemon.name)}</h2>
        <IdBgContainer $bgColor={pokemon.color}>
          <h2>#{String(pokemon.id).padStart(3, '0')}</h2>
        </IdBgContainer>
      </div>
      <Row className="flex-row ">
        <Col className="col-md-6 d-flex flex-column align-items-start">
          {Array.isArray(pokemon.types) &&
            pokemon.types.length > 0 &&
            pokemon.types.map((type) => (
              <TypesBgContainer
                key={type}
                className="my-2 justify-content-center align-items-center"
              >
                <span className=" px-3 py-1 ">{unslugify(type)}</span>
              </TypesBgContainer>
            ))}
        </Col>
        <Col className="d-flex col-md-6 align-items-center justify-content-center">
          <Link to={`/${pokemon.name}`} className="stretched-link">
            {pokemon.image && (
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className=" img-fluid"
              />
            )}
          </Link>
        </Col>
      </Row>
    </CardBg>
  )
}

export default memo(PokemonCard)
