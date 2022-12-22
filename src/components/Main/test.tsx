import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(
      <Main
        title={'React avançado'}
        description={'Typescript, ReactJs, NextJs, Styled-Components'}
      />,
    )

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(
      <Main
        title={'React avançado'}
        description={'Typescript, ReactJs, NextJs, Styled-Components'}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('shoul render colors correctly', () => {
    const { container } = render(
      <Main
        title={'React avançado'}
        description={'Typescript, ReactJs, NextJs, Styled-Components'}
      />,
    )

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
