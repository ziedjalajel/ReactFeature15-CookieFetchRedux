import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);

  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{productList}</ListWrapper>
      <Link to="/products/new">
        <BsPlusCircle className="float-right" size="2em" />
      </Link>
    </div>
  );
};

export default ProductList;
