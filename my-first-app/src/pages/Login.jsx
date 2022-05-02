
//import CleanerLogin1 from '../components/CleanerLogin1'
//import CleanerLogin2 from '../components/CleanerLogin2'
import styled from 'styled-components';
import Login1 from '../components/Login1';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;

`

function Login() {
  return (
    <>
    
    <Container>
      <Login1/>
   
    </Container>
    
    </>
  )
}

export default Login