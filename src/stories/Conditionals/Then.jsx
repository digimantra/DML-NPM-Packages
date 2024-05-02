import { Fragment } from "react";
import PropTypes from "prop-types";

export const Then = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

Then.propTypes = {
  children: PropTypes.node.isRequired,
};
