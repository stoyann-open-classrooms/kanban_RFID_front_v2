import { Link } from 'react-router-dom';
import './productItems.css'
import NoPhoto from '../../../Assets/no_picture.png'

function ProductItem({ product }) {
  console.log(product);
  return (
    <article className="product_card">
      {product.stock === 0 ? (
        <div className="badge_product rupture">Rupture !</div>
      ): ( 
        <>
        <div className="badge_product inStock"> stock : {product.stock}</div>
        </>
      )}
      <figure>
        {/* <img src={NoPhoto} alt="" /> */}
        
        
         <img

          src={`http://localhost:5058/uploads/${product.image}`}
          alt={product.name}
        /> 
      </figure>
      <div className="card_body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.designation}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${product._id}`}>
          <button className="btn btn-primary">détails</button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductItem;
