import React, { useState } from 'react'
import {AppContext} from "../../App"
import {VKShareButton, VKIcon, WhatsappShareButton, WhatsappIcon, OKShareButton, OKIcon, TelegramIcon, TelegramShareButton} from "react-share"
import { Link } from 'react-router-dom'

const Items = (props) => {

    const context = React.useContext(AppContext)

    const [added, setAdded] = useState(context.isAdded);
    const [fav, setFav] = useState(false);

    const onClickFav=()=>{
    setFav(!fav);
    let id = props.id;
    let myId = props.myId;
    let title = props.title;
    let description = props.description;
    let price = props.price;
    let img = props.img;
    props.favBtn({title, description, price, img, id, myId})
    }

    const onClickAdd=()=>{
      setAdded(!added);
      let id = props.id;
      let myId = props.myId;
      let title = props.title;
      let description = props.description;
      let price = props.price;
      let img = props.img;
      props.onPlus({title, description, price, img, id, myId})
      }

  return (
    <div className='card md-6 rounded '>
    <div  className='card-header py-2 px-3'>
      

                {
                  context.isFav(props.myId) === true ?
                <button type="button" className="w-100 btn btn-lg btn-primary"
                onClick={onClickFav}>
                  Добавлен в избранное
                </button>
                :
                <button type="button" className="w-100 btn btn-lg btn-primary"
                onClick={onClickFav}>
                  Добавить в избранное
                </button>
                }
                
                <Link to={`/productInfo/`} style={{color:'black'}}><h6 style={{marginTop:10, marginBottom:10}}>{props.title}</h6></Link>
                <img className="rounded" src={props.img} width={'85%'} height={'300px'} ></img>
                <p>Описание<br/>{props.descriptions.length > 33 ? props.descriptions.substring(0, 33) + '...' : props.descriptions}</p>
                <p>Цена: {props.price}</p>

                
                <button type="button" className="w-100 btn btn-lg btn-primary"
                onClick={onClickAdd}>{context.isAdded(props.myId)?
                <img width={15} 
              src={context.isAdded(props.myId)? '/img/icon.png': ''}
            alt=""/>: "Добавить в корзину"}</button>

            <h5 className='mt-2'>Поделиться</h5>
            
              <VKShareButton 
              className='col-2'
              title={props.title}
              description={props.descriptions}
              image={props.img}
              url={'https://ladushka-grom93.vercel.app/'} >
                <VKIcon 
                round={true}
                size={32 }/>
                </VKShareButton>

              <WhatsappShareButton
              className='col-2'
              url={'https://ladushka-grom93.vercel.app/'}
              title={props.title}
              image={props.img}
              separator={' '}>
                <WhatsappIcon 
                round={true}
                size={32}/>
              </WhatsappShareButton>

              <OKShareButton
              className='col-2'
              url={'https://ladushka-grom93.vercel.app/'}
              title={props.title}
              image={props.img}>
                <OKIcon
                round={true}
                size={32}/>
              </OKShareButton>

              <TelegramShareButton
              className='col-2'
              url={'https://ladushka-grom93.vercel.app/'}
              title={props.title}
              image={props.img}>
                <TelegramIcon
                round={true}
                size={32}/>
              </TelegramShareButton>
              
              </div>
              </div>
            
  )
}

export default Items