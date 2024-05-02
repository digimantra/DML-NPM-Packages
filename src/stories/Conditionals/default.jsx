import { Fragment } from "react";
import PropTypes from "prop-types";

export const Default = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

Default.propTypes = {
  children: PropTypes.node.isRequired,
};
