import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled.tsx";

type TitlePropsType = {
  title: string
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