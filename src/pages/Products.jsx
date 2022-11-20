import { useContext, useEffect } from "react";
import AddProductForm from "../components/products/AddProductForm";
import ProductList from "../components/products/ProductList";
import Searchbar from "../components/shared/searchBar/Searchbar";
import Spinner from "../components/shared/spinner/Spinner";
import ProductContext from "../context/product/ProductContext";

function Products() {
  const { products, loading, fetchProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="title_page">
          <h1>Produits</h1>
          <AddProductForm />
        </div>

        <Searchbar placeholder={'Rechercher un article par désignation ou réffèrence'} />
        <ProductList products={products} />
      </>
    );
  }
}

export default Products;
