import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import profile from "../images/profile2.jpg";
import { withRouter } from "react-router-dom";

const Main = ({ history }) => {
  return (
    <Layout>
      <MainContainer>
        <Photo />
        <Name>조태호</Name>
        <Button onClick={() => history.push("/about")}>welcome →</Button>
      </MainContainer>
    </Layout>
  );
};

export default withRouter(Main);

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Photo = styled.div`
  width: 300px;
  height: 300px;
  /* border: 1px solid blue; */
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;
const Name = styled.h1`
  font-size: 50px;
  font-weight: normal;
  margin-top: 30px;
  letter-spacing: normal;
  color: #57606f;
`;
const Button = styled.button`
  background: #42acc6;
  border: none;
  color: #fff;
  width: 180px;
  height: 60px;
  margin-top: 30px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    background: #048baa;
  }
`;
