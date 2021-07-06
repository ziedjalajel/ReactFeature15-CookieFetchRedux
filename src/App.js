import { Route, Switch } from "react-router";

// Styling
import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Components
import ShopDetails from "./components/shopComponents/ShopDetails";
import ShopList from "./components/shopComponents/ShopList";
import ProductDetail from "./components/ProductDetail";
import ProductForm from "./components/forms/ProductForm";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ShopForm from "./components/forms/ShopForm";
import BeatLoader from "react-spinners/BeatLoader";
import SignupForm from "./components/signup/SignupForm";
import SigninForm from "./components/signin/signinForm";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App(props) {
  const dispatch = useDispatch();
  const [currentTheme, setCurrentTheme] = useState("light");
  const products = useSelector((state) => state.products.products);
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  const loadingProducts = useSelector((state) => state.products.loading);
  const loadingShops = useSelector((state) => state.shops.loading);
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      {loadingShops || loadingProducts ? (
        <BeatLoader size={10} />
      ) : (
        <Switch>
          <Route
            path={[
              "/shops/:shopSlug/addproduct",
              // "/products/:productSlug/edit",
            ]}
          >
            <ProductForm />
          </Route>
          <Route path={"/shops/:shopSlug"}>
            <ShopDetails />
          </Route>
          <Route path={"/shops"}>
            <ShopList />
          </Route>
          <Route path="/addshop">
            <ShopForm />
          </Route>
          <Route path="/signin">
            <SigninForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>

          <Route path="/products/:productSlug">
            <ProductDetail />
          </Route>
          <Route path="/products">
            <ProductList products={products} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      )}
    </ThemeProvider>
  );
}

export default App;
