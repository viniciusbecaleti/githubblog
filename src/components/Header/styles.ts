import styled from 'styled-components'

import headerBackgroundLeftDetails from '../../assets/header-background-left-details.png'
import headerBackgroundRightDetails from '../../assets/header-background-right-details.png'
import headerBackgroundShadow from '../../assets/header-background-shadow.png'

export const HeaderContainer = styled.header`
  position: relative;

  height: 296px;
  background: ${({ theme }) => theme['base-profile']}
    url(${headerBackgroundShadow}) no-repeat bottom center/cover;

  display: flex;
  justify-content: center;

  padding-top: 64px;

  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${headerBackgroundLeftDetails}) no-repeat left;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${headerBackgroundRightDetails}) no-repeat right;
  }
`

export const Logo = styled.img`
  width: 148px;
  height: 98px;
`
