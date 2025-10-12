import './App.css'
import {Card} from "./components/Card/Card";
import type {CardType} from "./types.ts";

type AppPropsType = {
  data: CardType[]
}

function App({data}: AppPropsType) {
  return (
    <div className="app">
      {data.map((card, index) => (
        <Card
          key = {index}
          imgSrc = {card.imgSrc}
          imgAlt = {card.imgAlt}
          title = {card.title}
          text = {card.text}
        />
      ))}

    </div>
  )
}

export default App
