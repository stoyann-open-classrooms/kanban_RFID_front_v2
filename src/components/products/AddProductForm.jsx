import { useState, useContext } from "react";
import ProductContext from "../../context/product/ProductContext";
import AlertContext from "../../context/alert/AlertContext";
import Dialog from "../../components/shared/Dialog/Dialog";

function AddProductForm() {
  const [product, setProduct] = useState({
 
    name: "",
    designation: "",
    refference: "",
    stock: "",
  });
  const {addProduct}  = useContext(ProductContext);
  const {setAlert}  = useContext(AlertContext);

  const [image, setImage] = useState("");

  const formData = new FormData();
  formData.append("image", image);
  formData.append("designation", product.designation);
  formData.append("refference", product.refference);
  formData.append("stock", product.stock);

  const handleForm = (e) => {
    e.preventDefault();
  
    if (product.name === "") {
        setAlert("Vous devez entrer un nom de produit !", 'error')
    
     
    }
    if (product.designation === "") {
      setAlert("Vous devez entrer une désignation pour ce produit", 'error');
    
    }
    if (product.refference === "") {
      setAlert("Vous devez entrer une réffèrence pour ce produit", 'error');
    
    }
    if (product.stock === "") {
      setAlert(`vous devez entrer le stock actuel pour ce produit !!  si le produit n'est pas en stock entrer 0`);
     
    } else {
        addProduct(product)
        setAlert(`Le produit ${product.name} a étè ajouter avec succées. REF: ${product.refference}`, 'success')
     setProduct({
        name: "",
        designation: "",
        refference: "",
        stock: "",
     })
     setImage('')
    }
  };

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <>
      <Dialog>
        <h2>Ajouter un produit</h2>
        <form
          className="dialog_form"
          method="POST"
          onSubmit={handleForm}
          encType="multipart/form-data"
        >
          <div className="input_group">
            <label htmlFor="product_image">Ajouter une image</label>
            <input
              name="image"
              onChange={handleFile}
              id="product_image"
              accept="image/png, image/jpeg , image/png"
              type="file"
            />
          </div>
          <div className="input_group">
            <label htmlFor="product_name">Entrez le nom du produit</label>
            <input
              name="name"
              onChange={handleInput}
              id="product_name"
              type="text"
            />
          </div>
          <div className="input_group">
            <label htmlFor="product_refference">
              Entrez la réffèrence du produit
            </label>
            <input
              name="refference"
              onChange={handleInput}
              id="product_refference"
              type="text"
            />
          </div>
          <div className="input_group">
            <label htmlFor="product_designation">
              Entrez la désignation du produit
            </label>
            <textarea
              name="designation"
              onChange={handleInput}
              id="product_designation"
              type="text"
            />
          </div>
          <div className="input_group">
            <label htmlFor="product_stock">Entrez le stock actuel</label>
            <input
              name="stock"
              onChange={handleInput}
              id="product_stock"
              type="number"
            />
          </div>
          <button className="btn-form-submit" type="submit">
            Enregistrer
          </button>
        </form>
      </Dialog>
    </>
  );
}

export default AddProductForm;
