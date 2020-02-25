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
`;
