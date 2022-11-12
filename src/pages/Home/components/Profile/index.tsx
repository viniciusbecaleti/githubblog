import { Author, Avatar, ProfileContainer } from './styles'

import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
} from 'react-icons/fa'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src="https://github.com/viniciusbecaleti.png" alt="" />

      <Author>
        <div>
          <h2>Vinicius Becaleti</h2>
          <a
            href="https://github.com/viniciusbecaleti"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <FaExternalLinkAlt size={12} />
          </a>
        </div>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul>
          <li>
            <FaGithub size={18} />
            viniciusbecaleti
          </li>

          <li>
            <FaBuilding size={18} />
            Rocketseat
          </li>

          <li>
            <FaUserFriends size={18} />
            32 seguidores
          </li>
        </ul>
      </Author>
    </ProfileContainer>
  )
}
