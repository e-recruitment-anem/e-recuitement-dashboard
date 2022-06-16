import { Link } from "react-router-dom";
import "../styles/_components.scss";

const Hello = () => {
  return (
    <div className="hello">
      <Link to="/offers">
        <h1>Offers</h1>
      </Link>
      <span> --- </span>
      <Link to="/offerdetails">
        <h1>Offer details</h1>
      </Link>
      <span> --- </span>
      <Link to="/myoffers">
        <h1>My Offers</h1>
      </Link>
      <span> --- </span>
      <Link to="/myprofile">
        <h1>My profile</h1>
      </Link>
    </div>
  );
};

export default Hello;
