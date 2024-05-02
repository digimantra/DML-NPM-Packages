import { Fragment } from "react";
import PropTypes from "prop-types";

export const Loading = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

Loading.propTypes = {
  children: PropTypes.node.isRequired,
};
