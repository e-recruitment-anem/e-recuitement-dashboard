import {
  faFolder,
  faLocation,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const SearchBar: FC = () => {
  return (
    <div className="home__searchbar">
      <div className="home__searchbar-input">
        <FontAwesomeIcon
          icon={faSearch}
          className="home__searchbar-input-icon"
        ></FontAwesomeIcon>
        <input type="text" placeholder="Rechercher offre..." />
      </div>
      <div className="home__searchbar-input">
        <FontAwesomeIcon
          icon={faLocation}
          className="home__searchbar-input-icon"
        ></FontAwesomeIcon>
        <input type="text" placeholder="Rechercher offre..." />
      </div>
      <div className="home__searchbar-input">
        <FontAwesomeIcon
          icon={faFolder}
          className="home__searchbar-input-icon"
        ></FontAwesomeIcon>
        <input type="text" placeholder="Rechercher offre..." />
      </div>
      <div className="home__searchbar-button">
        <span>Find offer</span>
      </div>
    </div>
  );
};

export default SearchBar;
