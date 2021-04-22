import PropTypes from "prop-types";
import taskProp from "../../props/task.prop";

export default {
  tasks: PropTypes.arrayOf(taskProp).isRequired,
};
