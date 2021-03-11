import PropTypes from "prop-types";
import hostProps from './host.props';
import locationProps from './location.props';

export default PropTypes.shape({
  city: PropTypes.shape({
    location: locationProps,
    name: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.array.isRequired,
  host: hostProps,
  id: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  // eslint-disable-next-line camelcase
  is_favorite: PropTypes.bool.isRequired,
  // eslint-disable-next-line camelcase
  is_premium: PropTypes.bool.isRequired,
  location: locationProps,
  // eslint-disable-next-line camelcase
  max_adults: PropTypes.number.isRequired,
  // eslint-disable-next-line camelcase
  preview_image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}).isRequired;
