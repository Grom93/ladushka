import React, {useState, useEffect} from 'react'
import { AppContext } from '../../App'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect (()=>{
    async function axiosData(){
      const productData = await axios.get(`https://64873bf7beba629727904928.mockapi.io/tyrt/${id}`)
      
      
      
      
  
      setProduct(productData.data)
      
    }
    axiosData();
  
  },[id])
  
  
const context = React.useContext(AppContext)
  return (
    <div>
      <h4>{id}</h4>  
    </div>
  )
}

export {ProductInfo}