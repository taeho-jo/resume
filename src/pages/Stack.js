import React from "react";
import MainSkills from "components/MainSkills";
import Skills from "../components/Skills";
import { Html, Js, Reactt, Vue } from "../data/SkillsArr";
import styled from "styled-components";
import Layout from "../components/Layout";

const html = Html.map(el => <Skills el={el}></Skills>);
const js = Js.map(el => <Skills el={el}></Skills>);
const react = Reactt.map(el => <Skills el={el}></Skills>);
const vue = Vue.map(el => <Skills el={el}></Skills>);

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
          <MainSkills title="Vue" content={vue} />
        </Main>
      </Container>
    </Layout>
  );
};

export default Stack;

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  @media (max-width: 830px) {
    width: 100%;
    /* min-width: 350px; */
    margin-top: 10px;
  }
  @media (max-width: 400px) {
    width: 100%;
    min-width: 350px;
    margin-top: 10px;
  }
`;
const Main = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  max-width: 800px;
  padding: 20px 50px 0 50px;
  @media (max-width: 400px) {
    width: 100%;
    min-width: 350px;
    padding: 0 20px;
  }
`;
