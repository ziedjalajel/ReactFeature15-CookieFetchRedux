import { Link } from "react-router-dom";

const UpdateButton = ({ slug }) => {
  return (
    <Link to={`/products/${slug}/edit`}>
      <button className="btn btn-outline-warning">Edit</button>
    </Link>
  );
};

export default UpdateButton;
