import React from 'react'
import ItemsBasket from './ItemBasket'

const Basket = (props) => {
  return (
    <div>
      <div>
        {
          props.overlayProp.length>0?
        
        <div>
          {
            props.overlayProp.map(obj =>{
              return(
                <ItemsBasket
                key={obj.id}
                id={obj.id}
                title={obj.title}
                price={obj.price}
                img={obj.img}
                deleteItems={props.deleteItems}
                />
              )
            })
          }
        </div>

        :
        <h1 className='col-md-8 offset-md-2'>Корзина пуста</h1>
        }
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <p>Итог</p>
            <p>{props.totalPrice}</p>
            <button type="button" className='w-10 btn-lg btn-primary'>Оформить</button>

          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Basket