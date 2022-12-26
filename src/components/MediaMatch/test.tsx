import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import { responsive } from '../../utils/responsive'
import MediaMatch from '.'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        ,
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
        ,
      </>,
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })
  it('should be hidden if no media query is present', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide based on media type present', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: responsive.min.medium,
    })
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: responsive.max.medium,
    })
  })
})
