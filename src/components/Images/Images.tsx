import styled from "styled-components";
import type {CardType} from "../../types";

type ImagesPropsType = {
  src: CardType["imgSrc"],
  alt: CardType["imgAlt"],
}

export const Image = ({src, alt}: ImagesPropsType) => {
  return (
      <StyledImg src={src} alt={alt}/>
  );
};

const StyledImg = styled.img`
  max-width: 100%;
  border-radius: 10px;
  object-fit: cover;
`