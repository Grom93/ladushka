import React from 'react'
import Slider from "./Slider";
import CardItem from "./cart/CardItem";

const Home = (props) => {
  return (
    <div>
      <Slider/>
      <CardItem 
      item={props.item}
      favorites={props.favorites}
      setFavorites={props.setFavorites}
      overlayItems={props.overlayItems}
      setOverlayItems={props.setOverlayItems}
      />
    </div>
  )
}

export default Home