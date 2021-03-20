import PropTypes from "prop-types";
import locationProp from "./location.props";

export default PropTypes.shape({
  location: locationProp,
  name: PropTypes.string.isRequired
}).isRequired;
