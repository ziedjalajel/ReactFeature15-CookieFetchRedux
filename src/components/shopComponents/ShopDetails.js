import { useParams, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductList from "../ProductList";
import { DetailWrapper } from "../../styles";
import { getProductById } from "../../store/utils";

const ShopDetails = () => {
  const { shopSlug } = useParams();
  const shops = useSelector((state) => state.shops.shops);
  const shop = shops.find((p) => p.slug === shopSlug);
  const products = useSelector((state) => state.products.products);
  if (!shop) return <Redirect to="/" />;
  const listOfProducts = shop.products.map((product) =>
    getProductById(product.id, products)
  );
  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <img src={shop.image} />
          <h3>{shop.name}</h3>
          <Link to={`/shops/${shop.id}/addproduct`}>
            <button type="button" class="btn btn-outline-secondary">
              Add Cookies
            </button>
          </Link>
        </DetailWrapper>
        <ProductList product={listOfProducts} shopId={shop.id} />
      </div>
    </div>
  );
};
export default ShopDetails;
