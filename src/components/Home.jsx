import React from 'react'
import Slider from "./Slider";
import CardItem from "./cart/CardItem";
import Helmet from 'react-helmet'

const Home = (props) => {
  return (
    <div>
      <Helmet>
      <title>Ладушка</title>
      <meta name="description" content="Главная"/>
      <link rel="icon" type="image/png" href="img/logos.png" sizes="16x16" />
      
    </Helmet>
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