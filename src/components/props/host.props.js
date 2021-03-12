import PropTypes from "prop-types";

export default PropTypes.shape({
// eslint-disable-next-line camelcase
  avatar_url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // eslint-disable-next-line camelcase
  is_pro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}).isRequired;
