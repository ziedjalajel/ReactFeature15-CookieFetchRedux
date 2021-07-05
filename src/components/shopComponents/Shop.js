import { NavShopItem } from "../../styles";

const Shop = (props) => {
  const shop = props.shop;
  return (
    <NavShopItem to={`/shops/${shop.slug}`}>
      <h3>{shop.name}</h3>

      <img src={shop.image} />
    </NavShopItem>
  );
};
export default Shop;
