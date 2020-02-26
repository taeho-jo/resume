import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { Intership, JustSell, Wehome } from "../data/SkillsArr";
import Skills from "../components/Skills";
import image from "../images/justsell.png";

const inter = Intership.map(el => <Skills el={el} />);
const just = JustSell.map(el => <Skills el={el} />);
const wehome = Wehome.map(el => <Skills el={el} />);

const Portfolio = () => {
  return (
    <Layout>
      <Container>
        <Main>
          <Title>Project</Title>
          <Box>
            <Subject>
              Intership (DeusAdventures)
              <br />
              <Span>( 20.01.28 ~ 20.02.21 )</Span>
            </Subject>
            <Contents>
              <Div>
                <Iframe
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  src="https://www.youtube.com/embed/NNzrzl_fcUw"
                />
                <br />
                <A
                  target="_blank"
                  href="https://github.com/taeho-jo/deus_teaser"
                >
                  Launcher Page Github
                </A>{" "}
                /{" "}
                <A target="_blank" href="http://deusadventures.com/">
                  Site URL
                </A>
              </Div>
              <Div>
                <Iframe
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  src="https://www.youtube.com/embed/6RGvieZ0ZXQ"
                />
                <br />
                <A
                  target="_blank"
                  href="https://github.com/taeho-jo/deus_adventures"
                >
                  Auth Page Github
                </A>
              </Div>
              <Description>Description</Description>
              <Span>
                런칭 전 Launcher Page를 React로 리뉴얼을 하였고, 실제 web site
                제작 전 기초세팅과 Auth기능의 구조를 잡았습니다. Launcher Page는
                responsive web으로 작업하여 반응형에 대해 더욱 잘 이해 할 수
                있었습니다. next.js 초기 세팅을 진행하면서 next.js를 더 이해할
                수 있었고, 전역관리로는 mobx를 사용하였습니다. 인증부분의 구조를
                잡으며 firebase의 이메일, 소셜 로그인, 비밀번호 찾기 등의
                인증기능을 이용하였습니다.
              </Span>
              <Div>
                <Description>I Did</Description>
                {inter}
              </Div>
              <Description>Stack</Description>
              <Span>React, next.js, mobX, styled-components</Span>
            </Contents>
          </Box>
          <Box>
            <Subject>
              2차 Project (JustSell)
              <br />
              <Span>( 20.01.28 ~ 20.02.21 )</Span>
            </Subject>
            <Contents>
              <Image src={image} />
              <Div>
                <A
                  target="_blank"
                  href="https://github.com/wecode-bootcamp-korea/justSell_frontend"
                >
                  Github
                </A>
              </Div>
              <Description>Description</Description>
              <Span>
                JustSell은 상품 유통 운영 관리 서비스로 next.js를
                사용하였습니다. SSR과 SEO에 대해 이해하게 되었고, 라이브러리의
                사용 대신 redux를 이용하여 언어전환을 하면서 redux에 대해 이해를
                하였습니다. hooks를 사용하여 useState, useEffect 등에 대해 이해
                할 수 있었고, 로그인 기능은 JWT token을 기반으로 구현하였습니다.
              </Span>
              <Div>
                <Description>I Did</Description>
                {just}
              </Div>
              <Description>Stack</Description>
              <Span>next.js, redux, styled-components</Span>
            </Contents>
          </Box>
          <Box>
            <Subject>
              1차 Project (weHome)
              <br />
              <Span>( 20.01.28 ~ 20.02.21 )</Span>
            </Subject>
            <Contents>
              <Iframe
                src="https://www.youtube.com/embed/AZ71h90ajN0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
              <Div>
                <A
                  target="_blank"
                  href="https://github.com/wecode-bootcamp-korea/weHome_frontend)"
                >
                  Github
                </A>
              </Div>
              <Description>Description</Description>
              <Span>
                weHome은 오늘의 집 clone Project로 class형 components를
                사용하였고, react의 props와 state의 개념을 이해하게 되었고,
                API를 주고받으며 life cycle method에 대한 이해를 하였습니다.
                react의 onClick, onChange 등 여러가지 event를 구현하며 event에
                관하여 충분한 이해를 하였습니다. layout구조를 잡으며 flex-box를
                이해 할 수 있었습니다.
              </Span>
              <Div>
                <Description>I Did</Description>
                {wehome}
              </Div>
              <Description>Stack</Description>
              <Span>react, scss</Span>
            </Contents>
          </Box>
        </Main>
      </Container>
    </Layout>
  );
};

export default withRouter(Portfolio);

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  @media (max-width: 400px) {
    width: 100%;
    min-width: 350px;
    margin-top: 10px;
  }
`;
const Main = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  max-width: 900px;
  padding: 20px 50px 0 50px;
  @media (max-width: 830px) {
    padding: 0 20px;
  }
  @media (max-width: 550px) {
    padding: 0 20px;
  }
  @media (max-width: 400px) {
    margin-left: 0px;
    padding: 0;
    min-width: 350px;
  }
`;
const Title = styled.h1`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  /* color: #57606f; */
  @media (max-width: 830px) {
    text-align: center;
    font-size: 55px;
    width: 100%;
  }
  @media (max-width: 400px) {
    min-width: 350px;
    width: 100%;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid gray;
  @media (max-width: 830px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 400px) {
    min-width: 320px;
    width: 100%;
  }
`;
const Subject = styled.div`
  width: 400px;
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
  @media (max-width: 830px) {
    text-align: center;
    font-size: 35px;
    width: 100%;
  }
  @media (max-width: 400px) {
    min-width: 350px;
    width: 100%;
  }
`;
const Span = styled.span`
  margin-top: 10px;
  margin-bottom: 30px;
  display: inline-block;
  font-size: 16px;
  @media (max-width: 830px) {
    padding: 0 20px;
  }
  @media (max-width: 550px) {
    padding: 0 20px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;
const Contents = styled.div`
  width: 100%;
  /* border: 1px solid b  lue; */
  padding-left: 20px;
  padding-top: 40px;
  @media (max-width: 830px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  @media (max-width: 400px) {
    min-width: 350px;
    width: 100%;
  }
`;
const Iframe = styled.iframe``;

const Description = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  @media (max-width: 830px) {
    /* min-width: 350px; */
    width: 100%;
    text-align: center;
  }
  @media (max-width: 400px) {
    min-width: 350px;
    width: 100%;
    text-align: center;
  }
`;
const Image = styled.img`
  width: 100%;
  /* height: 100%; */
  /* background-image: url(${image});
  background-repeat: no-repeat;
  background-size: contain; */
  max-width: 504px;
  /* max-height: 260px; */
  @media (max-width: 400px) {
    /* margin: 0 20px; */
    min-width: 350px;
    
  }
`;

const Div = styled.div`
  margin-bottom: 30px;
`;

const A = styled.a`
  /* display: inline-block; */
  text-decoration: none;
  color: black;
  font-size: 15px;
  :hover {
    color: #42acc6;
  }
  @media (max-width: 400px) {
    /* margin-top: 20px; */
    padding: 0 10px;
    text-align: center;
    min-width: 350px;
  }
`;
