import PropTypes from "prop-types";
import React, { Fragment} from "react";
import { Else } from "./Else";
import { useAsyncCondition } from "./useAsyncCondition";

export const If = ({ condition, children }) => {

    const resolveCondition = useAsyncCondition(condition);

    if (resolveCondition === null) return null;

  return (
    <Fragment>
      {React.Children.toArray(children).find(
        (c) => (c.type !== Else) !== !resolveCondition
      ) || null}
    </Fragment>
  );
};

If.propTypes = {
  condition: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func // Allow condition to be a function
  ]).isRequired,
  children: PropTypes.node.isRequired,
};