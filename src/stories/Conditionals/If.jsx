import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Else } from "./Else";
import { Loading } from "./loading";
import { useEffect, useState } from "react";
import { Then } from "./Then";

const getConditionResult = (condition) => {
  const conditionResult = Boolean(
    typeof condition === "function" ? condition() : condition
  );

  return conditionResult;
};

const useAsyncCondition = (condition) => {
  const [resolveCondition, setResolveCondition] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const resolveConditionAsync = async () => {
      if (condition instanceof Promise) {
        try {
          const result = await condition;
          setResolveCondition(getConditionResult(result));
        } catch (error) {
          console.error("Error resolving condition:", error);
          setResolveCondition(false); // Set condition to false in case of error
        } finally {
          setIsLoading(false); // Set loading state to false after resolution
        }
      } else {
        setResolveCondition(getConditionResult(condition));
        setIsLoading(false); // Set loading state to false for synchronous conditions
      }
    };
    resolveConditionAsync();
  }, [condition]);

  return isLoading ? null : resolveCondition;
};

export const If = ({ condition, children }) => {
  const resolveCondition = useAsyncCondition(condition);

  if (resolveCondition === null) {
    const hasFallback = React.Children.toArray(children).find(
      (c) => c.type === Loading
    );
    return <Fragment>{hasFallback}</Fragment>;
  }

  return (
    <Fragment>
      {React.Children.toArray(children).find(
        (c) => resolveCondition ? (c.type === Then)  : c.type === Else 
      ) || null}
    </Fragment>
  );
};

If.propTypes = {
  condition: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func, // Allow condition to be a function
    PropTypes.object,
  ]).isRequired,
  children: PropTypes.node.isRequired,
};
