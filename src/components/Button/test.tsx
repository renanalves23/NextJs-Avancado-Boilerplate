import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'
import theme from '../../styles/theme'

describe('<Button />', () => {
  it('should render the medium button by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`,
      height: '4rem',
      'font-size': `${theme.font.sizes.small}`,
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the small button when small prop present', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      padding: `${theme.spacings.xxsmall}`,
      height: '3rem',
      'font-size': `${theme.font.sizes.xsmall}`,
    })
  })
  it('should render the large button when large prop present', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': `${theme.font.sizes.medium}`,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`,
    })
  })
  it('should render the full width button when fullWidth present', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%',
    })
  })
  it('should render the withIcon  button when icon present', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>,
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      display: 'inline-flex',
    })
  })
})
