import Shop from "./Shop";
import { useState } from "react";
import SearchBar from "../SearchBar";
import { useSelector } from "react-redux";
import { ListWrapper } from "../../styles";

const ShopsList = (props) => {
  const [query, setQuery] = useState("");
  const shopsData = useSelector((state) => state.shops.shops);
  let shops = shopsData
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <Shop shop={shop} key={shop.id} />);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{shops}</ListWrapper>
    </div>
  );
};
export default ShopsList;
