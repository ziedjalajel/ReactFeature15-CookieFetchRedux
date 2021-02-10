import { Link } from "react-router-dom";

// Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

// Styling
import { ProductWrapper } from "../styles";

const ProductItem = ({ product }) => {
  return (
    <ProductWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>
      <p className="product-name">{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <UpdateButton slug={product.slug} />
      <DeleteButton productId={product.id} />
    </ProductWrapper>
  );
};

export default ProductItem;
