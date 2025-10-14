import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled.tsx";
import type {CardType} from "../../types";

type TitlePropsType = {
  title: CardType["title"],
}

export const Title = ({title}: TitlePropsType) => {
  return (
    <StyledTitle>{title}</StyledTitle>
  );
};

const StyledTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  color: ${myTheme.colors.dark};`