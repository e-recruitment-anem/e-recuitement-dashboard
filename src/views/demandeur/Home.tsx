import { FC } from "react";
import { useNavigate } from "react-router-dom";
import OfferResultItem from "../../components/JobSeeker/OfferResultItem";
import SearchBar from "../../components/JobSeeker/SearchBar";
import NavBar from "../../components/NavBar";
import PrimaryButton from "../../components/PrimaryButton";
import "../../styles/_components.scss";

const Home: FC = () => {
  const offersList = [
    {
      role: "UI/UX Designer",
      description:
        "Auctor pharetra gravida turpis volutpat porttitor nec commodo laoreet est. Eu feugiat eget suscipit vitae. Ac sit sit ullamcorper sed faucibus facilisi at pulvinar. Sed imperdiet mattis blandit nisl bibendum amet adipiscing. Diam in scelerisque amet, ut turpis ante diam odio. Vitae in augue.",
      agence: "Yassir algérie",
      agenceImage: "/img/demandeur/agencelogo.png",
    },
    {
      role: "UI/UX Designer",
      description:
        "Auctor pharetra gravida tur pulvinar. Sed mattis blandit nisl bibendum amet adipiscing. Diam in scelerisque amet, ut turpis ante diam odio. Vitae in .",
      agence: "Yassir algérie",
      agenceImage: "/img/demandeur/agencelogo.png",
    },
    {
      role: "UI/UX Designer",
      description:
        "Auctor pharetra gravida turpis volutpat porttitor nec commodo laoreet est. Eu feugiat eget suscipit vitae. Ac sit sit ullamcorper sed faucibus facilisi at pulvinar. Sed imperdiet mattis blandit nisl bibendum amet adipiscing. Diam in scelerisque amet, ut turpis ante diam odio. Vitae in augue.",
      agence: "Yassir algérie",
      agenceImage: "/img/demandeur/agencelogo.png",
    },
    {
      role: "UI/UX Designer",
      description:
        "Auctor pharetra gravida turpis volutpat porttitor nec commodo laoreet est. Eu feugiat eget suscipit vitae. Ac sit sit ullamcorper sed faucibus facilisi at pulvinar. Sed imperdiet mattis blandit nisl bibendum amet adipiscing. Diam in scelerisque amet, ut turpis ante diam odio. Vitae in augue.",
      agence: "Yassir algérie",
      agenceImage: "img/demandeur/agencelogo.png",
    },
    {
      role: "UI/UX Designer",
      description:
        "Auctor pharetra gravida turpis volutpat porttitor nec commodo laoreet est. Eu feugiat eget suscipit vitae. Ac sit sit ullamcorper sed faucibus facilisi at pulvinar. Sed imperdiet mattis blandit nisl bibendum amet adipiscing. Diam in scelerisque amet, ut turpis ante diam odio. Vitae in augue.",
      agence: "Yassir algérie",
      agenceImage: "/img/demandeur/agencelogo.png",
    },
  ];

  const navigate = useNavigate();
  const openInNewTab = (url) => {
    navigate(url);
  };

  return (
    <>
      <NavBar />
      <div className="home__jobOffers">
        <SearchBar />
        <div className="home__jobOffers--heading">
          <h1>Browse job offers</h1>
          <PrimaryButton
            content="Request special job offer"
            color="primaryColor"
            onClick={() => openInNewTab("/seeker/jobrequest")}
          />
        </div>
        <div className="home__jobOffers--container">
          {offersList.map(({ role, description, agence, agenceImage }) => (
            <OfferResultItem
              role={role}
              description={description}
              agence={agence}
              agenceImage={agenceImage}
              detailsURL="/offers/detail"
              applicationURL="/offers/apply"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
