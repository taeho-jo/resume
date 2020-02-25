import React from "react";
import styled from "styled-components";

const Table = ({ title, content, border, margin }) => {
  return (
    <Container margin={margin} border={border}>
      <TitleBox>{title}</TitleBox>
      <ContentBox>
        <A href={content}>{content}</A>
      </ContentBox>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  /* border: 1px solid red; */
  display: flex;
  border-top: 1px solid #778ca3;
  border-bottom: ${props => props.border};
  padding: 15px 0;
  margin-bottom: ${props => props.margin};
`;
const TitleBox = styled.div`
  /* border: 1px solid green; */
  width: 100px;
  text-align: right;
  margin-right: 30px;
  font-size: 16px;
  font-weight: bold;
`;
const ContentBox = styled.div`
  /* border: 1px solid blue; */
  width: 300px;
`;

const A = styled.a`
  text-decoration: none;
  color: #000;
`;
