import React from 'react'
import Profile from '../components/Profile';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import PictureUploader from '../components/PictureUploader';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1 fr;
  justify-content: column;
  
  
`
function Profileuser() {
  return (
   <>
   
   
   <Container>
   <Profile/>
   </Container>
   
   
   </>
  )
}

export default Profileuser;