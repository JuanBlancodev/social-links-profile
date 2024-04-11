import styled from 'styled-components'
import avatar from '../../assets/avatar-jessica.jpeg'

const AvatarContainer = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  overflow: hidden;
`

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Avatar = () => {
  return (
    <AvatarContainer>
      <AvatarImg src={avatar} alt="avatar" />
    </AvatarContainer>
  )
}

export default Avatar