import styled from 'styled-components'

export const PostsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin: 3rem 0;
`

export const PostItem = styled.article`
  padding: 2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-post']};

  > div {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    h3 {
      color: ${({ theme }) => theme['base-title']};
      line-height: 1.6;
      font-size: 1.25rem;
    }

    span {
      white-space: nowrap;
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
      margin-top: 8px;
    }
  }

  p {
    margin-top: 1.25rem;
    line-height: 1.6;
  }
`
