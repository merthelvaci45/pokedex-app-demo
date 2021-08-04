import { useEffect, useState } from "react";

/**
 * this hook is responsible for simulating a loading process for a time period of 500ms.
 * clicking to "CATCH", "RELEASE" and/or "FAVORITE" buttons will activate this hook and
 * a helper "Loading..." text will be displayed to user for the specified amount of time.
 */
const useFakeProcessing = () => {
  const [isDataProcessing, setIsDataProcessing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDataProcessing(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [isDataProcessing]);

  return [isDataProcessing, setIsDataProcessing];
};

export default useFakeProcessing;
