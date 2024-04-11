import styled from 'styled-components'
import SocialButton from './SocialButton'

const Container = styled.div`
  margin-top: 25px;
`



const SocialContainer = () => {
  return (
    <Container className="grid gap-2">
      <SocialButton value="GitHub" />
      <SocialButton value="Frontend Mentor" />
      <SocialButton value="LinkedIn" />
      <SocialButton value="Twitter" />
      <SocialButton value="Instagram" />
    </Container>
  )
}

export default SocialContainer