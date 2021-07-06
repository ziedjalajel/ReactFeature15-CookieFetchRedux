import { Logo, NavItem, ThemeButton, BtnColumn } from "../styles";

import darkLogo from "../dark-logo.png";
import lightLogo from "../light-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/actions/authAcyions";
import { useHistory } from "react-router";

const NavBar = ({ currentTheme, toggleTheme }, props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/");
  };
  return (
    <div className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img src={currentTheme === "light" ? lightLogo : darkLogo} alt="logo" />
      </Logo>
      <div className="navbar-nav ml-auto">
        {user ? (
          <>
            <NavItem className="nav-item" to="/products">
              Products
            </NavItem>
            <NavItem
              className="nav-item"
              to="/shops"
              style={{ padding: "0.25en 1en" }}
            >
              Shops
            </NavItem>
          </>
        ) : (
          <></>
        )}

        <BtnColumn>
          {user ? (
            <>
              <h3>Hello {user.username}</h3>
              <ThemeButton className="nav-item" onClick={handleSignOut}>
                Sign Out
              </ThemeButton>
            </>
          ) : (
            <>
              <NavItem
                className="nav-item"
                to="/signup"
                style={{ padding: "0.25en 1en" }}
              >
                <ThemeButton className="nav-item">Signup</ThemeButton>
              </NavItem>
              <NavItem
                className="nav-item"
                to="/signin"
                style={{ padding: "0.25en 1en" }}
              >
                <ThemeButton className="nav-item">Sign in</ThemeButton>
              </NavItem>{" "}
            </>
          )}
        </BtnColumn>
        <BtnColumn>
          <ThemeButton className="nav-item" onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </BtnColumn>
      </div>
    </div>
  );
};

export default NavBar;
