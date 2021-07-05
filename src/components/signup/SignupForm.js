import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addSignup, fetchSignup } from "../../store/actions/signupActions";

const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [signup, setSignup] = useState({
    userName: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const handleChange = (event) =>
    setSignup({ ...signup, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSignup(signup));

    history.push("/");
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Signup Form</h1>
      <div className="mb-3">
        <label className="form-label">Username :</label>
        <input
          type="text"
          value={signup.userName}
          onChange={handleChange}
          name="userName"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password :</label>
        <input
          type="text"
          value={signup.password}
          onChange={handleChange}
          name="password"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email :</label>
        <input
          type="text"
          value={signup.email}
          onChange={handleChange}
          name="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">First Name :</label>
        <input
          type="text"
          value={signup.firstName}
          onChange={handleChange}
          name="firstName"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name :</label>
        <input
          type="text"
          value={signup.lastName}
          onChange={handleChange}
          name="lastName"
          className="form-control"
        />
      </div>
      <button type="submit" class="btn btn-outline-success">
        Create
      </button>
    </form>
  );
};
export default SignupForm;
