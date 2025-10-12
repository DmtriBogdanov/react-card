import App from './App.tsx'
import {createRoot} from "react-dom/client";
import {GlobalStyle} from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {myTheme} from "./styles/Theme.styled";
import imageCard from "./assets/img/image-card.png";
import type {CardType} from "./types.ts";



const dataCards: CardType[] = [
  {
    imgSrc: imageCard,
    imgAlt: "Image",
    title: "Headline",
    text: "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
  }
]
createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={myTheme}>
    <App data = {dataCards} />
    <GlobalStyle />
  </ThemeProvider>
)
