import styled from 'styled-components'

export const SearchPostContainer = styled.div`
  margin-top: 4.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: ${({ theme }) => theme['base-subtitle']};
      font-size: 1.125rem;
    }

    span {
      font-size: 0.85rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  input {
    width: 100%;
    height: 50px;
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;
    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
