import Header from '../components/Header'
import Footer from '../components/Footer'
import CleanerLogin1 from '../components/CleanerLogin1'
import CleanerLogin2 from '../components/CleanerLogin2'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;

`

function Login() {
  return (
    <>
    <Header/>
    <Container>
    <CleanerLogin1/>
    <CleanerLogin2/>
    </Container>
    <Footer/>
    </>
  )
}

export default Login