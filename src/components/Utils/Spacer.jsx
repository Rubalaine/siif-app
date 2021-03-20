import React from "react";
import styled from "styled-components";
const Space = styled.span`
  display: block;
  margin-bottom: ${(props) => (props.size ? props.size : 1)}rem;
`;

const Spacer = ({ size }) => <Space size={size}></Space>;

export default Spacer;
