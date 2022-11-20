import { useContext} from "react";
import Spinner from "../shared/spinner/Spinner";
import ProductItem from "./productItems/ProductItem";
import SearchContext from "../../context/search/SearchContext";
function ProductList({products}) {
  const {searchValue} = useContext(SearchContext)
  
console.log(searchValue);

  return (
    <>
    <div className="container-flex">
      {products.map((product) => (
        <ProductItem key={product.slug} product={product} />
        ))}
    </div>
    
        </>
  );
}

export default ProductList;
