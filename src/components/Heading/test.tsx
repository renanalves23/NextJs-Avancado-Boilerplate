import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import theme from '../../styles/theme'
import 'jest-styled-components'
import Heading from '.'

describe('<Heading />', () => {
  it('should render white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(
      screen.getByRole('heading', { name: /Won Games/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: `${theme.colors.white}`,
    })
  })
  it('should render the heading with black text', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: `${theme.colors.black}`,
    })
  })

  it('should render the heading with leftLine', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`,
    })
  })

  it('should render the heading with bottomLine', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after',
      },
    )
  })
})
