import { HeaderContainer, Logo } from './styles'

import logoImage from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoImage} alt="" />
    </HeaderContainer>
  )
}
