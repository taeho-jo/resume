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
              <iframe
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                width="504px"
                height="315px"
                src="https://www.youtube.com/embed/NNzrzl_fcUw"
              />
              <Div>
                <A href="https://github.com/taeho-jo/deus_teaser">
                  Launcher Page Github
                </A>{" "}
                / <A href="http://deusadventures.com/">site url</A>
                <br />
                <A href="https://github.com/taeho-jo/deus_adventures">
                  Auth Page Github
                </A>{" "}
                / <A href="https://youtu.be/8cSX7J_tbAo">Auth Page youtube</A>
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
              <Image />
              <Div>
                <A href="https://github.com/wecode-bootcamp-korea/justSell_frontend">
                  Github
                </A>
              </Div>
              <Description>Description</Description>
              <Span>
                JustSell은 상품 유통 운영 관리 서비스로 next.js를
                사용하였습니다. SSR과 SEO에 대해 이해하게 되었고, 라이브러리의
                사용 대신 redux를 이용하여 언어전환을 하면서 redux에 대해 이해를
                하였습니다.
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
              <iframe
                src="https://www.youtube.com/embed/AZ71h90ajN0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                width="504px"
                height="315px"
              />
              <Div>
                <A href="https://github.com/wecode-bootcamp-korea/weHome_frontend)">
                  Github
                </A>
              </Div>
              <Description>Description</Description>
              <Span>
                weHome은 오늘의 집 clone Project로 props와 state를 이해하게
                되었고, API를 주고받으며 life cycle method에 대한 이해를
                하였습니다. layout구조를 잡으며 flex-box를 이해 할 수
                있었습니다.
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
  display: flex;
  justify-content: center;
`;
const Main = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  max-width: 900px;
  padding: 20px 50px 0 50px;
`;
const Title = styled.h1`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  /* color: #57606f; */
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid gray;
`;
const Subject = styled.div`
  width: 400px;
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
  /* border: 1px solid green; */
  /* border-right: 1px solid gray; */
  //
`;
const Span = styled.span`
  margin-top: 10px;
  margin-bottom: 30px;
  display: inline-block;
  font-size: 16px;
`;
const Contents = styled.div`
  width: 100%;
  /* border: 1px solid b  lue; */
  padding-left: 20px;
  padding-top: 40px;
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
`;
const Image = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: contain;
  width: 504px;
  height: 260px;
`;

const Div = styled.div`
  margin-bottom: 30px;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  font-size: 15px;
`;
