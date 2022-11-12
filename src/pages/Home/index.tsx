import { Profile } from './components/Profile'
import { SearchPost } from './components/SearchPost'
import { PostsContainer, PostItem } from './components/styles'

export function Home() {
  return (
    <div className="container">
      <Profile />
      <SearchPost />

      <PostsContainer>
        <PostItem>
          <div>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </div>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </PostItem>

        <PostItem>
          <div>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </div>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </PostItem>

        <PostItem>
          <div>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </div>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </PostItem>

        <PostItem>
          <div>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </div>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </PostItem>

        <PostItem>
          <div>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </div>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </PostItem>

        <PostItem>
          <div>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </div>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </PostItem>
      </PostsContainer>
    </div>
  )
}
