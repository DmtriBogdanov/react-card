import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

type ButtonPropsType = {
  titleBtn: string,
  color: string,
}

export const Button = ({titleBtn, color}: ButtonPropsType) => {
  return (
    <StyledButton color={color}>{titleBtn}</StyledButton>
  );
};

type StyledBtnPropsType = {
  color?: string;
  titleBtn?: string;
}

const StyledButton = styled.button<StyledBtnPropsType>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.color};
  border-radius: 5px;
  min-width: 86px;
  width: 100%;
  padding: 5px 0;
  color: ${props => props.color};
  background-color: transparent;
  font-weight: 700;
  font-size: 10px;
  line-height: 2;
  transition: 0.2s;
  
  &:hover {
    background-color: ${props => props.color};
    color: ${myTheme.colors.light};
  }
`
