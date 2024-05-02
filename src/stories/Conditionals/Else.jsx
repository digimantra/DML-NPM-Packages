import { Fragment } from "react";
import PropTypes from "prop-types";

export const Else = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

Else.propTypes = {
  children: PropTypes.node.isRequired,
};
