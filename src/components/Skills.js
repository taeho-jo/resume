import React from "react";
import styled from "styled-components";

const Skills = ({ el }) => {
  return <Content>{el}</Content>;
};

export default Skills;

const Content = styled.li`
  font-size: 16px;
  margin-top: 15px;
  margin-left: 20px;
  @media (max-width: 830px) {
    margin-left: 0;
    padding: 0 20px;
    font-size: 14px;
    margin-top: 5px;
    text-align: left;
  }
  @media (max-width: 400px) {
    margin: 5px 20px;
    padding: 0;
    text-align: left;
  }
`;
