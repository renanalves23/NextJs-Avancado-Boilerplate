import Heading from '../Heading'
import Logo from '../Logo'
import * as S from './styles'

interface IMain {
  title: string
  description: string
}

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJs, NextJs, Styled-Components',
}: IMain) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="logo" />
    {/* <Heading>
      <Logo />
    </Heading> */}
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Homem em frente de uma mesa"
    />
  </S.Wrapper>
)

export default Main
