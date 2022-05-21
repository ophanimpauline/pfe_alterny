import React from "react";
import styled from "styled-components";


const Container = styled.div`
  height: 27px;
  width: 100%;
  background-color: #1db5c0;
  color: white;
  font-family: "lato";
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1;
`;
const Language = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: silver;
  cursor: pointer;
  grid-column: 1 / 1;
`;
const Text = styled.small`
font-size: 14px;
align-self: center;
`

const Link1 = styled.span`
  font-size: 33;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
  grid-column-start: 2;
  grid-column-end: 4;
  justify-self: end;
`;
const Link2 = styled.span`
  font-size: 33;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
  grid-column-start: 4;
  grid-column-end: 6;
  justify-self: start;
`;

export default function Infobar() {
  return (
    <Container>
 
      <Link1>Achetez maintenant payez plus tard</Link1>
      <Link2>| Comment vendre sur notre site</Link2>
    </Container>
  );
}
