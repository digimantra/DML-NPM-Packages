import { useEffect, useState } from "react";
import { getConditionResult } from "./getConditionResult";

export const useAsyncCondition = (condition) => {
    const [resolveCondition, setResolveCondition] = useState(null);
  
    useEffect(() => {
      const resolveConditionAsync = async () => {
        if (condition instanceof Promise) {
          const result = await condition;
          setResolveCondition(getConditionResult(result));
        } else {
          setResolveCondition(getConditionResult(condition));
        }
      };
      resolveConditionAsync();
    }, [condition]);
  
    return resolveCondition;
  };