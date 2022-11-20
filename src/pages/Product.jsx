import  { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductContext from '../context/product/ProductContext'

function Product() {
    const params = useParams()
    const {getProduct , product, loading} = useContext(ProductContext)
    

    useEffect(() => {
      getProduct(params.id)
    }, [])
    console.log(product);
  return (
    <div>Product {params.id}</div>
  )
}

export default Product