import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  font-size: 1.6rem;
  font-weight: 600;
  border: none;
  height: 4rem;
  width: ${(props) => (props.full ? "100%" : "15rem")};
  background-color: #203e86;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: all .4s;
  &:focus {
    outline: none;
    box-shadow: 0 0 1px 5px rgba(0, 76, 255, 0.25);
  }
`;
const Button = ({ children, full }) => <Btn full={full}>{children}</Btn>;
export default Button;
