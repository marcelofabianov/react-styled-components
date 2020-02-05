import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.backgroundColor || "#ffffff"};
  color: ${props => props.textColor || "#333333"};
`;

export const Container = styled.div`
  width: 1028px;
  min-width: 1028px;
  margin: 0 auto;
`;
