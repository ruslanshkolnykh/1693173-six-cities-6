import PropTypes from "prop-types";

export default PropTypes.shape({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}).isRequired;
