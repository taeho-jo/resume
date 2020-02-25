import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Layout = ({ children, history }) => {
  return (
    <>
      <Header>
        <Name onClick={() => history.push("/")}>조태호 | Jotang</Name>
        <div>
          <Menu onClick={() => history.push("/about")}>About</Menu>
          <Menu onClick={() => history.push("/portfolio")}>Portfolio</Menu>
          <Menu onClick={() => history.push("/stack")}>Stack</Menu>
          <Menu>
            <A target="_blank" href="https://github.com/taeho-jo">
              Github
            </A>
          </Menu>
          <Menu>
            <A target="_blank" href="https://taeho-jo.github.io/">
              Blog
            </A>
          </Menu>
        </div>
      </Header>
      <Main>{children}</Main>
    </>
  );
};

export default withRouter(Layout);

const Header = styled.nav`
  height: 50px;
  position: sticky;
  top: 0;
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;
const Name = styled.h1`
  font-size: 24px;
  color: #57606f;
  cursor: pointer;
  :hover {
    text-shadow: 1px 1px 3px #d1d8e0;
  }
`;
const Menu = styled.span`
  font-size: 15px;
  margin-right: 30px;
  cursor: pointer;
  color: #57606f;
  :last-child {
    margin: 0;
  }
  :hover {
    border-bottom: 2px solid #42acc6;
  }
`;

const A = styled.a`
  text-decoration: none;
  font-size: 15px;
  margin-right: 30px;
  cursor: pointer;
  color: #57606f;
  :last-child {
    margin: 0;
  }
  :hover {
    border-bottom: 2px solid #42acc6;
  }
`;
const Main = styled.main`
  /* border: 1px solid red; */
  margin-top: 70px;
`;
