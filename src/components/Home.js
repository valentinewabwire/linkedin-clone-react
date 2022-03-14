import React from "react";
import styled from "styled-components";
import Header from "./Header";

function Home({ props }) {
  return (
    <div>
      <Header />
      <Container>
        <Section>
          <h5>
            <a>Hiring in a hurry?</a>
          </h5>
          <p>Find talented pros in record time and keep business running</p>
        </Section>
      </Container>
    </div>
  );
}
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  max-width: 1126px;
  margin-left: auto;
  margin-right: auto;
`;
export default Home;
