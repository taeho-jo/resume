import React from "react";
import styled from "styled-components";

const MainSkills = ({ maintitle, title, content }) => {
  return (
    <Container>
      <MainTitle>
        {maintitle}
        <Title>
          {title}
          {content}
        </Title>
      </MainTitle>
    </Container>
  );
};

export default MainSkills;

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 400px) {
    width: 100%;
    min-width: 350px;
  }
`;

const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  @media (max-width: 830px) {
    text-align: center;
    font-size: 45px;
  }
  @media (max-width: 400px) {
    text-align: center;
    /* font-size: 45px; */
  }
  /* margin-bottom: 50px; */
`;
const Title = styled.ul`
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;
  padding: 10px;
  @media (max-width: 400px) {
    /* margin-bottom: 10px; */
  }
`;
