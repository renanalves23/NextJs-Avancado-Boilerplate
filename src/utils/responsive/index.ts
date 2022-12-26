const sizes = {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
}

const responsive = {
  min: {
    medium: `(min-width: ${sizes.medium})`,
    large: `(min-width: ${sizes.large})`,
    huge: `(min-width: ${sizes.huge})`,
    small: `(min-width: ${sizes.small})`,
  },
  max: {
    medium: `(max-width: ${sizes.medium})`,
    large: `(max-width: ${sizes.large})`,
    huge: `(max-width: ${sizes.huge})`,
    small: `(max-width: ${sizes.small})`,
  },
}

export { responsive }
