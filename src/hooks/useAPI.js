import { useEffect, useState } from "react";
import axios from "axios";

import { API_BASE_URL, API_METHODS } from "../utils";

/**
 * this hook is responsible for making an API request using its 2 named arguments "queryString" and "method".
 * both of them have their respective default values in case they are not provided as arguments when the hook is invoked.
 * "method" parameter is defined to have an "enum" like valuep provided by "API_METHODS" object. for further details,
 * please refer to "../utils/constants.js".
 */
const useAPI = ({
  queryString = "",
  method = API_METHODS.GET,
  headers = {},
  body = {},
}) => {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(false); // state to be set while API request is in progress and to display user a loading indicator
  const [isError, setIsError] = useState(false); // state to be set in case of any error while making request to API

  useEffect(() => {
    // this handler function is responsible for making the request to API
    const fetchFromAPIHandler = async () => {
      try {
        // at the start of request, reset "isLoading" and "isError" states to initial values
        setIsLoading(true);
        setIsError(false);

        switch (method) {
          case API_METHODS.GET:
            const { data } = await axios[method](
              `${API_BASE_URL}/${queryString}`
            ); // make API request
            setApiData(() => data); // update "apiData" state
            break;

          case API_METHODS.POST:
          case API_METHODS.PUT:
            // TODO: Put a sample POST/PUT methods logic in here
            break;

          default:
            return;
        }
      } catch (error) {
        setIsError(false);
        console.log(error);
      } finally {
        setIsLoading(false); // no matter what returns from API call, set "isLoading" status to false.
      }
    };

    fetchFromAPIHandler(); // invoke the handler function
  }, [queryString, method]);

  return [apiData, isLoading, isError];
};

export default useAPI;
