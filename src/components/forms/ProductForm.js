import { addProduct, updateProduct } from "../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { useState } from "react";
import { ThemeConsumer } from "styled-components";
import { shopsFetch } from "../../store/actions/shopActions";

const ProductForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { shopSlug } = useParams();
  const { shopId } = useParams();
  const { productSlug } = useParams();
  const foundProduct = useSelector((state) =>
    state.products.products.find((product) => product.slug === productSlug)
  );

  const [product, setProduct] = useState(
    foundProduct ?? {
      shopId: shopSlug,
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) =>
    setProduct({ ...product, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundProduct) {
      dispatch(updateProduct(product));
    } else dispatch(addProduct(product));
    history.push("/products");
  };
  const handleImage = (event) => {
    setProduct({ ...product, image: event.target.files[0] });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>{foundProduct ? "Update" : "Create"} Product</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={product.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          value={product.price}
          onChange={handleChange}
          name="price"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          value={product.description}
          onChange={handleChange}
          name="description"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="file"
          // value={product.image}
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        {foundProduct ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default ProductForm;
