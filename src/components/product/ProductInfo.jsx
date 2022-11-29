import './product.css'

function ProductInfo() {
  return (
    <>
        <h3>Délai enregistrée</h3>
    <div className='product-info'>
        <div className=" box min">
            delai min
            <p>58</p>
        </div>
        <div className=" box moy">
            delai moyen
            <p>98</p>
        </div>
        <div className=" box max">
            delai max
            <p>132</p>
        </div>
    </div>
    </>
  )
}

export default ProductInfo