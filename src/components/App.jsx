import styled from 'styled-components'
import Header from './Header/Header'
import SocialContainer from './Social/SocialContainer'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
`

const Content = styled.main`
  margin-top: 70px;
  width: 350px;
  height: 600px;

  padding: 35px 50px;

  border-radius: 10px;
  background-color: var(--color-dark-rey);

  @media (height < 740px){
    padding: 35px 20px;
    margin-top: 10px;
  }
`

const App = () => {
  return (
    <Wrapper>
      <Content>
        <Header />
        <SocialContainer />
      </Content>
    </Wrapper>
  )
}

export default App