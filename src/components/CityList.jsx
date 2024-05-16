/* eslint-disable react/prop-types */
import CityItem from "./CityItem.jsx";
import styles from "./CityList.module.css";
import Spinner from "./Spinner.jsx";
import PropTypes from "prop-types";
import Message from "./Message.jsx";

CityList.prototype = {
  cities: PropTypes.array.isRequired,
};
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner></Spinner>;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city in the map"></Message>
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
