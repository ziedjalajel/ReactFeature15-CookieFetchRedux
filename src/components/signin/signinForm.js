import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signin } from "../../store/actions/authAcyions";

const SigninForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState();

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <div className="mb-3">
        <label className="form-label">Username :</label>
        <input
          type="text"
          value={signin.username}
          onChange={handleChange}
          name="username"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password :</label>
        <input
          type="text"
          value={signin.password}
          onChange={handleChange}
          name="password"
          className="form-control"
        />
      </div>

      <button type="submit" class="btn btn-outline-success">
        Sign in
      </button>
    </form>
  );
};
export default SigninForm;
