import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled.tsx";

export const Title = ({title}) => {
  return (
    <StyledTitle>{title}</StyledTitle>
  );
};

const StyledTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  color: ${myTheme.colors.dark};`