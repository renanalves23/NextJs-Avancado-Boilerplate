import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const HandleIconRender = ({ icon }: Pick<ButtonProps, 'icon'>) => {
  return icon || <></>
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...rest
}: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} size={size} hasIcon={!!icon} {...rest}>
    <HandleIconRender icon={icon} />
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
