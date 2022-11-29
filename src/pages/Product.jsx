import  { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/product/Header'
import ProductInfo from '../components/product/ProductInfo'
import ProductOrders from '../components/product/productOrders/ProductOrders'
import Spinner from '../components/shared/spinner/Spinner'
import ProductContext from '../context/product/ProductContext'

function Product() {
    const params = useParams()
    const {getProduct , product, loading} = useContext(ProductContext)
    

    useEffect(() => {
      getProduct(params.id)
    }, [])
    console.log(product.data);
    if (loading) {
      return <Spinner />;
    } else {
  return (
    <div>
      <Header product={product}/>
      <ProductInfo/>
      <ProductOrders/>
    </div>
  )
}
}
export default Product