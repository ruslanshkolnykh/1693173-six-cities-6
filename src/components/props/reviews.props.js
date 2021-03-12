import PropTypes from 'prop-types';

export default PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.date.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    // eslint-disable-next-line camelcase
    avatar_url: PropTypes.string.isRequired,
    // eslint-disable-next-line camelcase
    is_pro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;
