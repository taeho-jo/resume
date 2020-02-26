import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

console.log(window.location.pathname);

const Layout = ({ children, history }) => {
  return (
    <>
      <Header>
        <Name onClick={() => history.push("/")}>조태호 | Jotang</Name>
        <div>
          <Home onClick={() => history.push("/")}>Home</Home>
          <Menu
            path={
              window.location.pathname === "/about" ? "2px solid #42acc6" : ""
            }
            onClick={() => history.push("/about")}
          >
            About
          </Menu>
          <Menu
            path={
              window.location.pathname === "/portfolio"
                ? "2px solid #42acc6"
                : ""
            }
            onClick={() => history.push("/portfolio")}
          >
            Portfolio
          </Menu>
          <Menu
            path={
              window.location.pathname === "/stack" ? "2px solid #42acc6" : ""
            }
            onClick={() => history.push("/stack")}
          >
            Stack
          </Menu>
          <Link>
            <A target="_blank" href="https://github.com/taeho-jo">
              Github
            </A>
          </Link>
          <Link>
            <A target="_blank" href="https://taeho-jo.github.io/">
              Blog
            </A>
          </Link>
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
  @media (max-width: 720px) {
    width: 100%;
    max-width: 720px;
    justify-content: space-around;
    padding: 0;
  }
  @media (max-width: 400px) {
    width: 100%;
    min-width: 350px;
    padding: 0;
    justify-content: space-around;
  }
`;

const Name = styled.h1`
  font-size: 24px;
  color: #57606f;
  cursor: pointer;
  :hover {
    text-shadow: 1px 1px 3px #d1d8e0;
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

const Menu = styled.span`
  /* display: inline-block; */
  font-size: 15px;
  margin-right: 30px;
  cursor: pointer;
  color: #57606f;
  border-bottom: ${props => props.path};
  :last-child {
    margin: 0;
  }
  :hover {
    border-bottom: 2px solid #42acc6;
  }
  @media (max-width: 400px) {
    margin: 0 15px;
  }
`;
const Home = styled(Menu)`
  display: none;
  @media (max-width: 400px) {
    display: inline-block;
    margin: 0 15px;
  }
`;

const Link = styled(Menu)`
  @media (max-width: 400px) {
    display: none;
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
`;
