import styled from 'styled-components'

export const ProfileContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin-top: -5.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const Author = styled.div`
  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
      color: ${({ theme }) => theme['base-title']};
    }

    a {
      text-transform: uppercase;
      text-decoration: none;
      font-weight: bold;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.blue};

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  p {
    line-height: 1.6;

    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${({ theme }) => theme['base-label']};
      }
    }
  }
`
