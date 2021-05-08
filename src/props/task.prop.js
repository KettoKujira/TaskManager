import PropTypes from "prop-types";

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  });