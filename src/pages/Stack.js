import React from "react";
import MainSkills from "components/MainSkills";
import Skills from "../components/Skills";
import { Html, Js, Reactt, Etc } from "../data/SkillsArr";
import styled from "styled-components";
import Layout from "../components/Layout";

const html = Html.map(el => <Skills el={el}></Skills>);
const js = Js.map(el => <Skills el={el}></Skills>);
const react = Reactt.map(el => <Skills el={el}></Skills>);
const etc = Etc.map(el => <Skills el={el}></Skills>);

const Stack = () => {
  return (
    <Layout>
      <Container>
        <Main>
          <MainSkills
            maintitle="⚒ 사용 기술"
            title="HTML / CSS"
            content={html}
          />
          <MainSkills title="JavaScript" content={js} />
          <MainSkills title="React" content={react} />
          <MainSkills title="기타" content={etc} />
        </Main>
      </Container>
    </Layout>
  );
};

export default Stack;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Main = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  max-width: 800px;
  padding: 20px 50px 0 50px;
`;
