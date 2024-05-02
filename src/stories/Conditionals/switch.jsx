import React from "react";
import { getConditionResult } from "./getConditionResult";
import {Case } from "./case"
import { Default} from "./default"
import PropTypes from "prop-types";


export const Switch = ({ children }) => {
    // -- Inspired by react-router --
  
    let matchingCase = undefined;
    let defaultCase = undefined;
  
    // If the children are a function then resolve it first
    if (typeof children === 'function') {
      children = children();
    }
  
    React.Children.forEach(children, (child) => {
      // not a valid react child, don't add it
      if (!React.isValidElement(child)) {
        return;
      }
  
      if (!matchingCase && child.type === Case) {
        const { condition } = child.props;
  
        const conditionResult = getConditionResult(condition);
  
        if (conditionResult) {
          matchingCase = child;
        } // else not matching condition, don't add it
      } else if (!defaultCase && child.type === Default) {
        defaultCase = child;
      } // else unknown type, don't add it
    });
  
    return matchingCase || defaultCase || null;
  };
  

  Switch.propTypes = {
    children: PropTypes.node.isRequired,
  };