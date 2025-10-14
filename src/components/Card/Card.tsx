import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {Image} from "../Images/Images.tsx";
import {Title} from "../Title/Title.tsx";
import {Text} from "../Text/Text.tsx";
import {Button} from "../Button/Button.tsx";

type CardPropsType = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
}

export const Card = ({imgSrc, imgAlt, title, text}: CardPropsType) => {
  return (
    <StyledCard>
      <Image src={imgSrc} alt={imgAlt}/>
      <ContentCard>
        <Title title={title}/>
        <Text text={text}/>
        <ButtonsBox>
          <Button titleBtn="See more" color={myTheme.colors.accent}/>
          <Button titleBtn="Save" color={myTheme.colors.accent}/>
        </ButtonsBox>
      </ContentCard>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  max-width: 300px;
  border-radius: 15px;
  background-color: ${myTheme.colors.light};
`

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 12px;
  gap: 20px;
`

const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`


