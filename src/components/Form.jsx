import React from 'react'
import { useForm } from "react-hook-form"
import "leaflet/dist/leaflet.css"
import axios from "axios"
import {
  MapContainer, 
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  CircleMarker,
  Polygon
  
} from "react-leaflet"


const colorOptions = {color:"purple"}
const centerPolygon=[
  [
  [54.917903, 37.409675],
  [54.910283, 37.411818],
  [54.911305, 37.438421],
  [54.922007, 37.439347]
  ]
]
const center=[54.914416, 37.416062]

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
     } = useForm()

     const onSubmit = (data) => {
      axios.post('https://64873bf7beba629727904928.mockapi.io/form', data)
      alert('Заявка отправлена')
      console.log(data)
     }
   
    
     console.log(watch("example"))

     return(
  <div>

    <form id="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Заполните заявку на обратную связь</h1>
    
      <div className='input-group mb-3'>
        <input {...register("lastName", {
          required: true,
          maxLength:50,
          pattern:/^[А-Яа-я]+$/i})}
        type='text'
        className='form-control'
        placeholder='Фамилия' />
      </div>
      {errors?.lastName?.type === "required" &&(
        <p style={{ color: 'red' }}>Поле обязательно для заполнение</p>
      ) }

        {errors?.lastName?.type === "maxLength" &&(
        <p style={{ color: 'red' }}>Поле не может содержать более 50 символов</p>
      ) }

        {errors?.lastName?.type === "pattern" &&(
        <p style={{ color: 'red' }}>Поле заполненно не корректно</p>
      ) }


      <input className="btn btn-outline-primary" type="submit" />
    </form>
    <br />

    <MapContainer
    center={center}
    zoom={10}
    style={{ width:"100vw", height:"500px" }}
    >
      <TileLayer url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=dAE3BC2L0QwO4EYHSwsX'
      attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      
      />

      <CircleMarker 
      center={center}
      pathOptions={{color: 'red'}}
      />

      <Marker position={center}>
        <Popup>
          Мы находимся тут
        </Popup>
        <Tooltip>
        Мы находимся тут
        </Tooltip>
      </Marker>

      <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
      
    </MapContainer>
    </div>


  )
}


export default Form