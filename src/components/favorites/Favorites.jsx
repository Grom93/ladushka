import React from 'react'
import axios from 'axios'
import {AppContext} from '../../App'
import Items from './Items'
import { Helmet } from 'react-helmet'

const Favorites = (props) => {

  const context = React.useContext(AppContext)

  const onAddOverlay = (obj) =>{
    axios.post('https://649063631e6aa71680cb2a6f.mockapi.io/cart', obj)
    context.setOverlayItems([...props.overlayItems, obj]);
  }

  const onDeleteFav =(id)=>{
    
    axios.delete(`https://649063631e6aa71680cb2a6f.mockapi.io/favorites/${id}`)
    props.setFavorites((fav) => fav.filter(item => item.id !==id));
}


  return (
    
    <div>
      <Helmet>
      <title>Ладушка</title>
      <meta name="description" content="Главная"/>
      <link rel="canonical" href="http://localhost:3000/favorites" />
      </Helmet>
      <div>
        <h1 className='col-md-8 offset-md-2'>Избранные товары</h1>
      </div>
    <div>
      {
        props.favorites.map(obj =>{
          return(
            <Items
            key={obj.id}
            id={obj.id}
            myId={obj.myId}
            title={obj.title}
            description={obj.description}
            price={obj.price}
            img={obj.img}
            
            onDeleteFav={
              (id)=>{
                onDeleteFav(id)
              }
            }

            onPlus={(cartobj)=>{
              onAddOverlay(cartobj)
            }
          }
            />

          )
        })
      }
      
    </div>

    </div>

  )
}

export default Favorites
