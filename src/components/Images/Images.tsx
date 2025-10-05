import styled from "styled-components";

type ImagesPropsType = {
  src: string,
  alt: string,
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