import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled.tsx";

type TextPropsType = {
  text: string
}

export const Text = ({text}:TextPropsType) => {
  return (
    <StyledText>{text}</StyledText>
  );
};

const StyledText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.6;
  color: ${myTheme.colors.grey};`