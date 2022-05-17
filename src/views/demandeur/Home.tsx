import { FC } from "react";
import OfferResultItem from "../../components/JobSeeker/OfferResultItem";
import NavBar from "../../components/NavBar";
import "../../styles/_components.scss";

const Home: FC = () => {
  return (
    <>
      <NavBar />
      <div className="home__jobOffers">
        <h1>Job offers</h1>
        <div className="home__jobOffers--container">
          <OfferResultItem />
          <OfferResultItem />
          <OfferResultItem />
          <OfferResultItem />
          <OfferResultItem />
          <OfferResultItem />
          <OfferResultItem />
          <OfferResultItem />
          <OfferResultItem />
        </div>
      </div>
    </>
  );
};

export default Home;
