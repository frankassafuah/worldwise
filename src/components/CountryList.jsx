/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem.jsx";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner.jsx";
// import PropTypes from "prop-types";
import Message from "./Message.jsx";
import { useCities } from "../contexts/CitiesContext.jsx";

// CountryList.prototype = {
//   cities: PropTypes.array.isRequired,
// };
function CountryList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner></Spinner>;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city in the map"></Message>
    );

  const countries = cities.reduce((acc, cur) => {
    if (!acc.map((el) => el.country).includes(cur.country)) {
      return [...acc, { country: cur.country, emoji: cur.emoji }];
    } else {
      return acc;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
