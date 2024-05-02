import { useEffect, useState } from "react";
import { getConditionResult } from "./getConditionResult";

export const useAsyncCondition = (condition) => {
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
