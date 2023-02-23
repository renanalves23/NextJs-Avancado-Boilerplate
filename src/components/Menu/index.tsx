import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Logo from '../Logo'
import * as S from './styles'
import { useState } from 'react'
import Button from '../Button'

export type MenuProps = {
  username?: string
}

const RegisterArea = ({ username }: MenuProps) => {
  return (
    <>
      {!username ? (
        <S.RegisterBox>
          <Button fullWidth size="large">
            Log in now
          </Button>
          <span>or</span>
          <S.CreateAccount href="#" title="Sign up">
            Sign up
          </S.CreateAccount>
        </S.RegisterBox>
      ) : (
        <></>
      )}
    </>
  )
}
const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>

      <S.LogoWrapper>
        <Logo hideOnMobile aria-label="Logo" />
      </S.LogoWrapper>

      <S.MenuGroup style={{ display: 'flex' }}>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="open shopping cart" />
        </S.IconWrapper>
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)} aria-label="close Menu" />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Store</S.MenuLink>
          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        <RegisterArea username={username} />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
