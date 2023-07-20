import { memo } from 'react'

import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PokemonType } from 'Types/PokemonType'

import { CardBg, IdBg, TypesBg } from './styles'

interface IPokemonCardProps {
  pokemon: PokemonType
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  return (
    <CardBg
      $bgColor={pokemon.color}
      className="d-flex  flex-column position-relative px-4 py-3 w-100"
    >
      <div className="d-flex">
        <h2 className="mb-3 d-flex flex-grow-1">{pokemon.name}</h2>
        <IdBg $bgColor={pokemon.color}>
          <h2>#{String(pokemon.id).padStart(3, '0')}</h2>
        </IdBg>
      </div>
      <Row className="flex-row ">
        <Col className="col-md-6 d-flex flex-column align-items-start">
          {Array.isArray(pokemon.types) &&
            pokemon.types.length > 0 &&
            pokemon.types.map((_t) => (
              <TypesBg
                key={_t}
                className="my-2 justify-content-center align-items-center"
              >
                <span
                  className=" px-3 py-1 "
                  style={{ verticalAlign: 'midle' }}
                >
                  {_t}
                </span>
              </TypesBg>
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
