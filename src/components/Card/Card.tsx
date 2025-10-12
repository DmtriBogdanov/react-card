import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {Image} from "../Images/Images.tsx";
import {Title} from "../Title/Title.tsx";
import {Text} from "../Text/Text.tsx";
import {Button} from "../Button/Button.tsx";
import './Card.css'

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
      <div className="card__content">
        <Title title={title}/>
        <Text text={text}/>
        <div className="card__buttons">
          <Button titleBtn="See more" color={myTheme.colors.accent}/>
          <Button titleBtn="Save" color={myTheme.colors.accent}/>
        </div>
      </div>
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


