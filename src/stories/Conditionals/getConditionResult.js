export const getConditionResult = (condition) => {
    const conditionResult = Boolean(
      typeof condition === "function" ? condition() : condition
    );
  
    return conditionResult;
};