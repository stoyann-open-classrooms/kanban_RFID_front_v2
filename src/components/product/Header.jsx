import Spinner from '../shared/spinner/Spinner';
import './product.css'

import NoPhoto from "../../Assets/no_picture.png";

function Header({ product }) {
    if(!product.data) {
        return <Spinner/>
    } else {

  
  return (
    <div className='banner'>
      <div className="banner_img">
        
      {product.data.image === "no_photo.jpg" ? (
        <>
        <button className='add-image'>+ ajouter une image</button>
          <img src={NoPhoto} alt={product.data.name} />
        </>
        ) : (
          <img
            src={`http://localhost:5058/uploads/${product.data.image}`}
            alt={product.name}
          />
        )}
      </div>
      <div className="banner-txt">

<h1>{product.data.name}</h1>
<p>{product.data.designation}</p>
  </div>
    </div>
  );
}
}
export default Header;
