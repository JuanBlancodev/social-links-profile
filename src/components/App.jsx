import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
`

const Content = styled.div`
  margin-top: 70px;
  width: 400px;
  height: 600px;

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
        
      </Content>
    </Wrapper>
  )
}

export default App