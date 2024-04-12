import styled from 'styled-components'
import SocialButton from './SocialButton'

const Container = styled.div`
  margin-top: 25px;
`



const SocialContainer = () => {
  return (
    <Container className="grid gap-2">
      <SocialButton value="GitHub" href="https://github.com/" />
      <SocialButton value="Frontend Mentor" href="https://www.frontendmentor.io" />
      <SocialButton value="LinkedIn" href="https://www.linkedin.com" />
      <SocialButton value="Twitter" href="https://twitter.com" />
      <SocialButton value="Instagram" href="https://www.instagram.com/" />
    </Container>
  )
}

export default SocialContainer