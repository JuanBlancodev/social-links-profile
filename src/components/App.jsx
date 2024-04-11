import styled from 'styled-components'
import Header from './Header/Header'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
`

const Content = styled.div`
  margin-top: 70px;
  width: 375px;
  height: 600px;

  padding: 50px 35px;

  border-radius: 10px;
  background-color: var(--color-dark-rey);

  @media (height < 740px){
    margin-top: 10px;
  }
`

const App = () => {
  return (
    <Wrapper>
      <Content>
        <Header />
      </Content>
    </Wrapper>
  )
}

export default App