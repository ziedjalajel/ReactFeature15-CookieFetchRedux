import { NavItem } from "../../styles";
import { Link } from "react-router-dom";
const Shop = (props) => {
  const shop = props.shop;
  return (
    <NavItem>
      <Link to={`/shops/${shop.slug}`}>
        <h3>{shop.name}</h3>
      </Link>
      <img src={shop.image} />
    </NavItem>
  );
};
export default Shop;
