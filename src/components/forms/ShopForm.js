import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addShop, shopsFetch } from "../../store/actions/shopActions";

const ShopForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [shop, setShop] = useState({
    name: "",
    image: "",
  });
  const handleChange = (event) =>
    setShop({ ...shop, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setShop({ ...shop, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addShop(shop)).then((a) => dispatch(shopsFetch()));
    dispatch(shopsFetch());
    history.push("/shops");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Create Shop</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={shop.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="file"
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <button type="submit" class="btn btn-outline-success">
        Create
      </button>
    </form>
  );
};
export default ShopForm;
