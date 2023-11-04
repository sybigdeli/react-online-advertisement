import MapPin from "../../assets/icons/map-pin.svg";
import propTypes from "prop-types";

const City = ({ city, country }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-1">
      <p>
        {city}, {country}
      </p>
      <img
        src={MapPin}
        className="opacity-50 flex-col justify-start items-start"
      />
    </div>
  );
};
City.propTypes = {
  city : propTypes.string,
  country : propTypes.string,
}

export default City;
