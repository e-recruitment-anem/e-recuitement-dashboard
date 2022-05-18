import { Link } from "react-router-dom";

const Hello = () => {
  return (
    <div>
      <Link to="/offerdetails">
        <h1>Offer details</h1>
      </Link>
      <span> --- </span>
      <Link to="/myoffers">
        <h1>My Offers</h1>
      </Link>
    </div>
  );
};

export default Hello;
