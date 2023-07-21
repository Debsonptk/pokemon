import { memo, useState } from 'react'

import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import ash from 'assets/Ash.png'
import logo from 'assets/pokemon_logo.jpeg'

import { MenuMb, MenuOverlay, NavSection } from './styles'

interface IMenuMobileProps {
  children?: React.ReactNode
}

const MenuMobile: React.FC<IMenuMobileProps> = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  return (
    <>
      <MenuOverlay
        $isMenuOpened={isMenuOpened}
        onClick={() => setIsMenuOpened(false)}
        className="position-fixed h-100 w-100"
      />
      <div className="d-flex align-items-center d-lg-none">
        <GiHamburgerMenu
          color="black"
          type="button"
          onClick={() => setIsMenuOpened(true)}
          size={35}
        />
      </div>
      <MenuMb
        $isMenuOpened={isMenuOpened}
        className="d-flex flex-column d-lg-none position-fixed bg-white h-100"
      >
        <NavSection className=" w-100">
          <div className=" d-flex flex-column justify-content-center mb-3">
            <AiOutlineClose
              type="button"
              onClick={() => setIsMenuOpened(false)}
              className="align-self-end"
            />
          </div>
          <div className="d-flex flex-column w-100">
            <h5 className="pb-4 border-bottom px-2">MENU</h5>
            <Link
              to="/"
              className="pb-3 pt-2 px-2 text-decoration-none text-black"
            >
              HOME
            </Link>
            <Link
              to="/pokemons"
              className="pb-3 px-2 text-decoration-none text-black"
            >
              POKEMONS
            </Link>
            <Link
              to="/contact"
              className="pb-3 px-2 text-decoration-none text-black"
            >
              CONTACT
            </Link>
          </div>
          <img src={ash} alt="Ash Ketchum" className="img-fluid d-flex" />
          <img src={logo} alt="Logo" className="img-fluid d-flex" />
        </NavSection>
      </MenuMb>
    </>
  )
}

export default memo(MenuMobile)
