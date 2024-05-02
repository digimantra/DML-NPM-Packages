import { Fragment } from "react";
import PropTypes from "prop-types";

export const Case = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

Case.propTypes = {
  children: PropTypes.node.isRequired,
};
