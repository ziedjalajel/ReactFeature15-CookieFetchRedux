import { useParams, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DetailWrapper } from "../../styles";

const ShopDetails = () => {
  const shopSlug = useParams().shopSlug;
  const shops = useSelector((state) => state.shops.shops);
  const shop = shops.find((p) => p.slug === shopSlug);
  if (!shop) return <Redirect to="/" />;
  return (
    <DetailWrapper>
      <img src={shop.image} />
      <h3>{shop.name}</h3>
    </DetailWrapper>
  );
};
export default ShopDetails;
