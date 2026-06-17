import { ConditionContext } from "../context";
import { useState, type ReactNode } from "react";

const Condition = ({ children }: { children: ReactNode }) => {
  const [checkrole, setCheckRole] = useState<string>("host")

  return (
    <ConditionContext.Provider value={checkrole}>
      {children}
    </ConditionContext.Provider>
  )
}

export default Condition;