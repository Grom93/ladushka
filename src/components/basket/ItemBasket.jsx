import React from 'react'
import {Col} from 'react-bootstrap'


const ItemBasket = (props) => {
  return (
    
          <div className="col px-3 py-3">
            <div className='card md-6 rounded'>
              <div className='card-header py-2 px-3'>
                <div className="d-flex align-items-center justify-content-center" >
              <img className="rounded" src={props.img} width={'10%'} height={'100px'} alt='Произошла ошибка' style={{ marginRight: 20 }}></img>
              
                <h5 style={{ marginRight: 20 }}>{props.title}</h5>
                
                <h5>
                  
                  <span style={{ marginRight: 20 }}>Цена: {props.price}</span>
                </h5>
                
                <button type="button" className="w-10 btn btn-lg btn-primary"
                onClick={()=>props.deleteItems(props.id)} style={{ marginLeft: 20 }}>Удалить из корзины</button>
                
                

                </div>
              </div>
            </div>
          </div>

          
        
  )
}

export default ItemBasket