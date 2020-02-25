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
`;

const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  /* margin-bottom: 50px; */
`;
const Title = styled.ul`
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;
  padding: 10px;
`;
