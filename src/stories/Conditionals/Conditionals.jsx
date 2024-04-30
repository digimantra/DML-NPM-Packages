import PropTypes from "prop-types";
import React, { Fragment } from "react";



// Function to resolve condition
const getConditionResult = (condition) => {
    const conditionResult = Boolean(
      typeof condition === "function" ? condition() : condition
    );
  
    return conditionResult;
};


//To check if function has than or catch method
const isFunction=(input)=> {
    return typeof input === 'function';
  }
  
const hasThen= (input)=>{
    return Reflect.has(input, 'then') && isFunction(input.then);
  }
  
const hasCatch = (input) =>{
    return Reflect.has(input, 'catch') && isFunction(input.catch);
  }
  
  /**
   * Verify if an object is a promise.
   */
const isThenable=(input)=> {
    if (typeof input !== 'object' || input === null) return false;
    return input instanceof Promise || (input !== Promise.prototype && hasThen(input) && hasCatch(input));
  }

// If Component
const If = ({ condition, children }) => {


  if (isThenable(condition)) {
 condition.then((value) => {
      console.log('Resolved:', value);
    }).catch((error) => {
      console.error('Rejected:', error);
    });
  } else {
    console.error('Not a thenable object');
  }


  const conditionResult = getConditionResult(condition);


  return (
    <Fragment>
      {React.Children.toArray(children).find(
        (c) => (c.type !== Else) !== !conditionResult
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

// Then Component
const Then = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

Then.propTypes = {
  children: PropTypes.node.isRequired,
};

// Else Component
const Else = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

Else.propTypes = {
  children: PropTypes.node.isRequired,
};

export { If, Else, Then };
