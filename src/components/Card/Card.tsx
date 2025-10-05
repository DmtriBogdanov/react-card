import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {Image} from "../Images/Images.tsx";
import {Title} from "../Title/Title.tsx";
import {Text} from "../Text/Text.tsx";
import {Button} from "../Button/Button.tsx";
import './Card.css'
import type {ButtonType} from "../../types.ts";

type CardPropsType = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
  buttons: ButtonType[];
}

export const Card = ({imgSrc, imgAlt, title, text, buttons}: CardPropsType) => {
  return (
    <StyledCard>
      <Image src={imgSrc} alt={imgAlt}/>
      <div className="card__content">
        <Title title={title}/>
        <Text text={text}/>
        <div className="card__buttons">
          {buttons.map((button, index) => (
            <Button
              key = {index}
              titleBtn = {button.titleBtn}
              color = {button.color}
            />
          ))}
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


