import React from "react";
import Items from "./Items";
import axios from "axios";
import { Row, Col } from 'react-bootstrap';

const CardItem = (props) => {
  const onAddOverlay = async (obj) => {
    try {
      const findOverlay = props.overlayItems.find(
        (objOver) => objOver.myId === obj.myId
      );
      if (findOverlay) {
        axios.delete(
          `https://649063631e6aa71680cb2a6f.mockapi.io/cart/${findOverlay.id}`
        ); 
        props.setOverlayItems((over) =>
          over.filter((o) => o.myId !== obj.myId)
        );
      } else {
        const { data } = await axios.post(
          "https://649063631e6aa71680cb2a6f.mockapi.io/cart/", obj
        );
        props.setOverlayItems([...props.overlayItems, data]);
      }
    } catch {
      alert("Произошла ошибка");
    }
  };

  const onAddFav = async (obj) => {
    try {
      const findFavorites = props.favorites.find(
        (objFav) => objFav.myId === obj.myId
      );
      if (findFavorites) {
        axios.delete(
          `https://649063631e6aa71680cb2a6f.mockapi.io/favorites/${findFavorites.id}`
        );
        props.setFavorites((over) => over.filter((o) => o.myId !== obj.myId));
      } else {
        const { data } = await axios.post(
          "https://649063631e6aa71680cb2a6f.mockapi.io/favorites", obj
        );
        props.setFavorites([...props.favorites, data]);
      }
    } catch {
      alert("Произошла ошибка");
    }
  };


 

  return (
    <div className="container">
      <Row justify-content="center" className='row-cols-4 justify-content-evenly row-cols-md-3 row-cols-sm-2 row-cols-xs-1 text-center'>
      
      
      {props.item.map((obj) => {
        return (
          <Col className="col px-3 py-3">
      
        
          <Items
            key={obj.id}
            id={obj.id}
            myId={obj.myId}
            title={obj.title}
            descriptions={obj.description}
            price={obj.price}
            img={obj.img}
            favBtn={(favObj) => {
              onAddFav(favObj);
            }}
            onPlus={(cartObj) => {
              onAddOverlay(cartObj);
            }}
          />
          
    
    </Col>
        );
      })}
      </Row>
      </div>
    
  );
};

export default CardItem;
