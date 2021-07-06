import Shop from "./Shop";
import { useState } from "react";
import SearchBar from "../SearchBar";
import { useSelector } from "react-redux";
import { ListWrapper } from "../../styles";
import { BsPlusCircle } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";

const ShopsList = (props) => {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  if (!user) history.push("/");
  const [query, setQuery] = useState("");

  const shopList = useSelector((state) => state.shops.shops);
  console.log(shopList);

  let shops = shopList
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <Shop shop={shop} key={shop.id} />);
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{shops}</ListWrapper>
      <Link to="/addshop">
        <BsPlusCircle className="float-right" size="2em" />
      </Link>
    </div>
  );
};
export default ShopsList;
