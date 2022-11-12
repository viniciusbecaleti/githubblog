import { SearchPostContainer } from './styles'

export function SearchPost() {
  return (
    <SearchPostContainer>
      <div>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </div>

      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchPostContainer>
  )
}
