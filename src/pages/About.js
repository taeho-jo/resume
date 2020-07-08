import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Table from "../components/Table";
import Layout from "../components/Layout";

const About = ({ history }) => {
  return (
    <Layout>
      <Container>
        <Main>
          <Title onClick={() => history.push("/")}>조태호 ( Jotang )</Title>
          <Content>
            안녕하세요!😁<br />
            사람과 인연을 소중하게 여깁니다.<br />
            빠르게 변하는 IT업계에서 빠른 습득력과 응용력을 기반으로 새로운 기술을 알아가는 것을 좋아합니다. React 개발 환경에 관심이 많고, 이를 활용하여 개발하는 것을 좋아합니다.
            <br />현재 vue.js를 사 용하여 개발을 진행하고 있습니다. 사용자들이 접속 했을 때 즐거움을 느낄 수 있게 하는 개발자가 되고 싶습니다
          </Content>
          <Table title="Email" content="jotang3726@gmail.com" />
          <Table title="Github" content="https://github.com/taeho-jo" />
          <Table
            margin="40px"
            border="1px solid #778ca3"
            title="Blog"
            content="https://taehoblog.netlify.app/"
          />
          <SubTitle>💻 개발 경력</SubTitle>
          <SubContent>CIZION(시지온)</SubContent>
          <Text>- 2020.03 ~ 현재</Text>
          <SubTitle>💻 교 육</SubTitle>
          <SubContent>weCode(위코드)</SubContent>
          <Text>- 2019.11 ~ 2020.02</Text>
          <SubTitle>🏢 이전 경력</SubTitle>
          <SubContent>서원유통</SubContent>
          <Text>- 2014.08 ~ 2019.08</Text>
          <SubTitle>🎓 학력</SubTitle>
          <Table title="학교명" content="인제대학교" />
          <Table title="기간" content="08.03  ~ 15.02" />
          <Table
            margin="40px"
            border="1px solid #778ca3"
            title="전공"
            content="국제경상학부(무역전공)"
          />
        </Main>
      </Container>
    </Layout>
  );
};

export default withRouter(About);

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  @media (max-width: 400px) {
    width: 100%;
    /* border: 0px solid green; */
    min-width: 350px;
  }
`;
const Main = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  max-width: 800px;
  padding: 20px 50px 0 50px;
  @media (max-width: 720px) {
    padding: 0 50px;
    /* min-width: 400px; */
  }
  @media (max-width: 400px) {
    min-width: 350px;
    padding: 0 20px;
  }
`;
const Title = styled.h1`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  /* color: #57606f; */
  @media (max-width: 400px) {
    text-align: center;
    font-size: 40px;
  }
`;
const Content = styled.section`
  font-size: 20px;
  letter-spacing: normal;
  /* color: #57606f; */
  margin-bottom: 40px;
  @media (max-width: 400px) {
    /* text-align: left; */
    padding: 0 10px;
    font-size: 16px;
  }
`;
const SubTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  @media (max-width: 400px) {
    padding: 0 10px;
  }
`;
const SubContent = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  @media (max-width: 400px) {
    padding: 0 10px;
  }
`;
const Text = styled.p`
  font-size: 18px;
  margin-bottom: 60px;
  @media (max-width: 400px) {
    padding: 0 10px;
  }
`;
